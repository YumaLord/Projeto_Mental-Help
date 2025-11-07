const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';

const inputMensagem = document.getElementById('input-mensagem');
const botaoEnviar = document.getElementById('botao-enviar');
const areaMensagens = document.getElementById('area-mensagens');

let remetenteId;
let destinatarioId;
let destinatarioName; 


function obterParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    
    destinatarioId = parseInt(params.get('targetId'));
    destinatarioName = params.get('targetName');

    remetenteId = getRemetenteIdFromToken(); 
    
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
    areaMensagens.innerHTML = '<p class="loading">Carregando histórico de mensagens...</p>';

    const url = `${URL_BASE_DA_API}/chat/${remetenteId}/${destinatarioId}`;
    const token = sessionStorage.getItem('token'); 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error('Falha ao carregar histórico.');
        }

        const mensagens = await response.json();
        exibirMensagens(mensagens);

    } catch (error) {
        console.error('Erro ao carregar histórico:', error);
        areaMensagens.innerHTML = '<p class="error">Não foi possível carregar o histórico de mensagens.</p>';
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
        conteudo: conteudo
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
            throw new Error('Falha ao enviar mensagem.');
        }

        const novaMensagem = await response.json();

        adicionarMensagemNaTela(novaMensagem);
        
        inputMensagem.value = '';
        rolarParaBaixo();

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Verifique o console.');
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
    
    const horaFormatada = new Date(mensagem.dataEnvio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    divMensagem.innerHTML = `
        <span class="conteudo">${mensagem.conteudo}</span>
        <span class="hora">${horaFormatada}</span>
    `;

    areaMensagens.appendChild(divMensagem);
}

function rolarParaBaixo() {
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}

botaoEnviar.addEventListener('click', enviarMensagem);

inputMensagem.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        enviarMensagem(evento);
    }
});

if (obterParametrosURL()) {
    carregarHistorico();
}