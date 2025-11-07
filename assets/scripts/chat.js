// NO ARQUIVO chat.js (COM LINHA DE DEBUG ADICIONADA)

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

    // 🔑 CHAMA A FUNÇÃO DE DECODIFICAÇÃO
    remetenteId = getRemetenteIdFromToken(); 
    
    // 📢 LINHA DE DEBUG CRÍTICA ADICIONADA:
    console.log(`DEBUG CHAT: Remetente ID lido do Token: ${remetenteId}`);

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

// ... (Restante do seu código carregarHistorico, enviarMensagem, etc. permanece inalterado) ...

async function carregarHistorico() {
    // ...
}

async function enviarMensagem(event) {
    // ...
}

function exibirMensagens(mensagens) {
    // ...
}

function adicionarMensagemNaTela(mensagem) {
    // ...
}

function rolarParaBaixo() {
    // ...
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