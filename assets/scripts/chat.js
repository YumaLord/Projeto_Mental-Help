// NO ARQUIVO chat.js (COM LINHA DE DEBUG PARA DESTINATÁRIO ID)

const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';

// Variáveis DOM (Mantidas globais, mas inicializadas dentro do 'load')
let inputMensagem;
let botaoEnviar;
let areaMensagens;

let remetenteId;
let destinatarioId;
let destinatarioName; 


// 🔑 Função principal que será chamada APENAS quando a página carregar
function iniciarChatPrincipal() {
    // 1. INICIALIZAÇÃO DOS ELEMENTOS APÓS O LOAD (Resolve o TypeError)
    inputMensagem = document.getElementById('input-mensagem');
    botaoEnviar = document.getElementById('botao-enviar');
    areaMensagens = document.getElementById('area-mensagens');

    // 2. Tenta obter os parâmetros e o ID do token
    if (obterParametrosURL()) {
        // 3. Adiciona os listeners APÓS ter certeza que os botões existem
        botaoEnviar.addEventListener('click', enviarMensagem);
        inputMensagem.addEventListener('keypress', (evento) => {
            if (evento.key === 'Enter') {
                enviarMensagem(evento);
            }
        });

        // 4. Carrega o histórico (GET)
        carregarHistorico();
    }
}


function obterParametrosURL() {
    const params = new URLSearchParams(window.location.search);
    
    destinatarioId = parseInt(params.get('targetId'));
    destinatarioName = params.get('targetName');

    // DEBUG: Obtém o ID real do token
    remetenteId = getRemetenteIdFromToken(); 
    
    // 📢 DEBUG CRÍTICO AQUI: Confirma os dois IDs
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

// ... (Restante das Funções: carregarHistorico, enviarMensagem, exibirMensagens, adicionarMensagemNaTela, rolarParaBaixo, etc. permanecem inalteradas)

async function carregarHistorico() {
    // Código da sua função carregarHistorico...
    areaMensagens.innerHTML = '<p class="loading">Carregando histórico de mensagens...</p>';

    const url = `${URL_BASE_DA_API}/chat/${remetenteId}/${destinatarioId}`;
    const token = sessionStorage.getItem('token'); 

    try {
        const response = await fetch(url, {
            method: 'GET',
            // Headers removidos para o teste sem autenticação no Back-end
            // headers: { 'Authorization': `Bearer ${token}` }
        });

        if (!response.ok) {
            // Se falhar (ex: 401 Unauthorized), mostra "Inicie uma conversa"
            console.error('Falha na autenticação ou busca de histórico:', response.status);
            areaMensagens.innerHTML = '<p class="info">Inicie uma nova conversa.</p>';
            return;
        }

        const mensagens = await response.json();
        exibirMensagens(mensagens);

    } catch (error) {
        console.error('Erro de rede ao carregar histórico:', error);
        areaMensagens.innerHTML = '<p class="error">Não foi possível conectar ao servidor para buscar histórico.</p>';
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
                // Headers removidos para o teste sem autenticação no Back-end
                // 'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(dadosMensagem)
        });

        if (!response.ok) {
             // Mostra o erro exato do Back-end
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
    
    // Certifique-se de que o campo dataEnvio está sendo usado
    const dataObj = new Date(mensagem.dataEnvio || Date.now()); 
    const horaFormatada = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

    divMensagem.innerHTML = `
        <span class="conteudo">${mensagem.conteudo}</span>
        <span class="hora">${horaFormatada}</span>
    `;

    areaMensagens.appendChild(divMensagem);
}

function rolarParaBaixo() {
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}


// 🔑 PONTO DE ENTRADA: Garante que o código só roda APÓS o HTML ser carregado
window.addEventListener('load', iniciarChatPrincipal);