const inputMensagem = document.getElementById('input-mensagem');
const botaoEnviar = document.getElementById('botao-enviar');
const areaMensagens = document.getElementById('area-mensagens');


    @param {string} texto
    @param {string} tipo

function adicionarMensagem(texto, tipo) {

    const divMensagem = document.createElement('div');

    divMensagem.className = 'bolha-mensagem ' + tipo;

    divMensagem.textContent = texto;

    areaMensagens.appendChild(divMensagem);

    areaMensagens.scrollTop = areaMensagens.scrollHeight;
}
function enviarMensagem() {
    const texto = inputMensagem.value.trim();
    if (texto !== '') {
        adicionarMensagem(texto, 'enviada');
        
        inputMensagem.value = '';
        // Resposta pronta
        setTimeout(() => {
            const textoResposta = "Entendido. Como podemos explorar isso juntos?";
            adicionarMensagem(textoResposta, 'recebida');
        }, 1000);
    }
}
botaoEnviar.addEventListener('click', enviarMensagem);

inputMensagem.addEventListener('keypress', (evento) => {

    if (evento.key === 'Enter') {
        enviarMensagem();

        evento.preventDefault(); 
    }
});