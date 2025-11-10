const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';

let historicoCarregadoInicialmente = false;

let inputMensagem;
let botaoEnviar;
let areaMensagens;

let inputArquivo;
let botaoAnexar;

let remetenteId;
let destinatarioId;
let destinatarioName; 

function iniciarChatPrincipal() {
    inputMensagem = document.getElementById('input-mensagem');
    inputArquivo = document.getElementById('input-arquivo');
    botaoEnviar = document.getElementById('botao-enviar');
    areaMensagens = document.getElementById('area-mensagens');
    botaoAnexar = document.getElementById('botao-anexar');

    if (obterParametrosURL()) {
        botaoEnviar.addEventListener('click', enviarMensagem);
        botaoAnexar.addEventListener('click', () => inputArquivo.click());

        inputArquivo.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                enviarArquivo(e.target.files[0]);
            }
        });
        inputMensagem.addEventListener('keypress', (evento) => {
            if (evento.key === 'Enter') {
                enviarMensagem(evento);
            }
        });

        setInterval(carregarHistorico, 2000); 
    }
}


function obterParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    
    destinatarioId = parseInt(params.get('targetId'));
    destinatarioName = params.get('targetName');

    remetenteId = getRemetenteIdFromToken(); 

    console.log(`DEBUG CHAT: Remetente ID lido do Token: ${remetenteId}`);
    console.log(`DEBUG CHAT: Destinatário ID lido da URL: ${destinatarioId}`);


    if (destinatarioName) {
        document.title = `Chat com ${destinatarioName}`;
    }

    if (!remetenteId) {
        areaMensagens.innerHTML = '<p class="error">Erro: Não foi possível obter o ID do usuário logado (Token inválido ou ausente).</p>';
        return false;
    }

    if (isNaN(destinatarioId)) {
        areaMensagens.innerHTML = '<p class="error">Erro: ID do destinatário inválido na URL.</p>';
        return false;
    }
    return true;
}


async function carregarHistorico() {
    
    if (!historicoCarregadoInicialmente) {
        areaMensagens.innerHTML = '<p class="loading">Carregando histórico de mensagens...</p>';
    }

    const url = `${URL_BASE_DA_API}/chat/${remetenteId}/${destinatarioId}`;
    const token = sessionStorage.getItem('token'); 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        historicoCarregadoInicialmente = true; 

        if (!response.ok) {
            if (areaMensagens.children.length === 0) {
                areaMensagens.innerHTML = '<p class="info">Inicie uma nova conversa.</p>';
            }
            return;
        }

        const mensagens = await response.json();
        exibirMensagens(mensagens); 

    } catch (error) {
        historicoCarregadoInicialmente = true; 
        
        console.error('Erro de rede ao carregar histórico:', error);
        if (areaMensagens.children.length === 0) {
            areaMensagens.innerHTML = '<p class="error">Não foi possível conectar ao servidor.</p>';
        }
    }
}

async function enviarMensagem(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    
    const conteudo = inputMensagem.value.trim();
    if (!conteudo) return;

    const token = sessionStorage.getItem('token'); 

    const dadosMensagem = {
        remetenteId: remetenteId,
        destinatarioId: destinatarioId,
        conteudo: conteudo,
        tipo: 'TEXTO'
    };

    try {
        botaoEnviar.disabled = true;
        
        const response = await fetch(`${URL_BASE_DA_API}/chat/mensagem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(dadosMensagem)
        });

        if (!response.ok) {
            throw new Error(`Falha ao enviar mensagem. Status: ${response.status}`);
        }

        const novaMensagem = await response.json();

        adicionarMensagemNaTela(novaMensagem);
        
        inputMensagem.value = '';
        rolarParaBaixo();

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert(`Erro ao enviar mensagem: ${error.message}. Verifique o console.`);
    } finally {
        botaoEnviar.disabled = false;
    }
}

function exibirMensagens(mensagens) {
    if (mensagens.length === 0) {
        areaMensagens.innerHTML = '<p class="info">Inicie uma nova conversa.</p>';
        return;
    }

    areaMensagens.innerHTML = '';
    mensagens.forEach(adicionarMensagemNaTela);
    rolarParaBaixo();
}

function adicionarMensagemNaTela(mensagem) {
    const tipo = (mensagem.remetenteId === remetenteId) ? 'enviada' : 'recebida';
    
    const divMensagem = document.createElement('div');
    divMensagem.className = 'bolha-mensagem ' + tipo;
    
    const dataObj = new Date(mensagem.dataEnvio || Date.now()); 
    const horaFormatada = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    let conteudoHTML;

    const tipoMensagem = mensagem.tipo || 'TEXTO'; 

    switch (tipoMensagem) {
        case 'AUDIO':
            conteudoHTML = `<audio controls src="${URL_BASE_DA_API}/${mensagem.conteudo}" class="chat-audio-player">Seu navegador não suporta áudio.</audio>`;
            break;
        case 'IMAGEM':
            conteudoHTML = `<img src="${URL_BASE_DA_API}/${mensagem.conteudo}" class="chat-image-preview" alt="Imagem enviada">`;
            break;
        case 'ARQUIVO':
            conteudoHTML = `<a href="${URL_BASE_DA_API}/${mensagem.conteudo}" target="_blank">Download: ${mensagem.conteudo.split('/').pop()}</a>`;
            break;
        case 'TEXTO':
        default:
            conteudoHTML = `<span class="conteudo">${mensagem.conteudo}</span>`;
            break;
    }

    divMensagem.innerHTML = `
        ${conteudoHTML}
        <span class="hora">${horaFormatada}</span>
    `;

    areaMensagens.appendChild(divMensagem);
}

function determinarTipoMensagem(mimeType) {
    if (mimeType.startsWith('image/')) return 'IMAGEM';
    if (mimeType.startsWith('audio/')) return 'AUDIO';
    return 'ARQUIVO';
}

async function enviarArquivo(arquivo) {
    const token = sessionStorage.getItem('token'); 
    const tipo = determinarTipoMensagem(arquivo.type); 

    const formData = new FormData();
    formData.append('remetenteId', remetenteId);
    formData.append('destinatarioId', destinatarioId);
    formData.append('arquivo', arquivo);
    formData.append('tipo', tipo);

    try {
        botaoEnviar.disabled = true;
        
        const response = await fetch(`${URL_BASE_DA_API}/chat/upload`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Falha no upload. Status: ${response.status}`);
        }

        const novaMensagem = await response.json();

        adicionarMensagemNaTela(novaMensagem);
        rolarParaBaixo();
        
    } catch (error) {
        console.error('Erro ao enviar arquivo:', error);
        alert(`Erro ao enviar arquivo: ${error.message}.`);
    } finally {
        botaoEnviar.disabled = false;
        inputArquivo.value = '';
    }
}

function rolarParaBaixo() {
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}


window.addEventListener('load', iniciarChatPrincipal);