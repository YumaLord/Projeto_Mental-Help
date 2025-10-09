const inputMensagem = document.getElementById('input-mensagem');
const botaoEnviar = document.getElementById('botao-enviar');
const areaMensagens = document.getElementById('area-mensagens');
/**
 * Adiciona uma nova bolha de mensagem à área de chat.
 * @param {string} texto - O conteúdo da mensagem.
 * @param {string} tipo - O tipo de mensagem ('enviada' ou 'recebida').
 */
function adicionarMensagem(texto, tipo) {
    // 1. Cria o elemento div da mensagem
    const divMensagem = document.createElement('div');
    // 2. Adiciona as classes CSS necessárias (bolha-mensagem + enviada/recebida)
    divMensagem.className = 'bolha-mensagem ' + tipo;
    // 3. Define o texto (conteúdo)
    divMensagem.textContent = texto;
    // 4. Adiciona a nova mensagem na área de exibição
    areaMensagens.appendChild(divMensagem);
    // 5. Scroll area sms recente
    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}
/**
 * Lida com o evento de envio da mensagem.
 */
function enviarMensagem() {
    const texto = inputMensagem.value.trim();
    if (texto !== '') {
        // Adiciona a mensagem do usuário (tipo 'enviada')
        adicionarMensagem(texto, 'enviada');
        
        // Limpa o campo de input
        inputMensagem.value = '';
        // (Simula uma resposta após um breve atraso)
        setTimeout(() => {
            const textoResposta = "Entendido. Como podemos explorar isso juntos?";
            adicionarMensagem(textoResposta, 'recebida');
        }, 1000);
    }
}
// --- Adiciona Listeners de Evento ---
// 1. Enviar mensagem ao clicar no botão
botaoEnviar.addEventListener('click', enviarMensagem);
// 2. Enviar mensagem ao pressionar a tecla Enter no campo de input
inputMensagem.addEventListener('keypress', (evento) => {
    // Verifica se a tecla pressionada é a Enter
    if (evento.key === 'Enter') {
        enviarMensagem();
        // Previne a quebra de linha padrão do input
        evento.preventDefault(); 
    }
});