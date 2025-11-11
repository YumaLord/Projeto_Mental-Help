// NO ARQUIVO: Deslogar.js (CÓDIGO COMPLETO REVISADO)

const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; // 🔑 Use sua URL base real

function closeModal(){
    let modal = document.getElementById("modal-sair");
    modal.classList.add("disable");
}

function showModal(){
    let modal = document.getElementById("modal-sair");
    modal.classList.remove("disable");
}

function deslogarUsuario() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole"); 
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userAvatarPath"); // Limpa o avatar salvo
    
    closeModal();

    //Redireciona tela login
    window.location.href = "Login-interface.html";
}


// 🔑 LÓGICA DE UPLOAD DE AVATAR (NOVO)
document.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.getElementById('input-avatar');
    
    // Atualiza a foto do perfil ao carregar a página (se houver caminho salvo)
    carregarFotoDePerfilInicial();
    
    if (inputAvatar) {
        inputAvatar.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                enviarAvatar(e.target.files[0]);
                closeModal(); // Fecha o modal após selecionar o arquivo
            }
        });
    }
});


async function enviarAvatar(arquivo) {
    const token = sessionStorage.getItem('token'); 

    const formData = new FormData();
    formData.append('avatar', arquivo); // Campo 'avatar' que o Multer espera

    try {
        const response = await fetch(`${URL_BASE_DA_API}/usuario/avatar`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Falha no upload do avatar. Status: ${response.status}`);
        }

        const data = await response.json();
        alert("Foto de perfil atualizada com sucesso!");
        
        // Atualiza a imagem na sessão e na tela principal
        atualizarFotoDePerfil(data.novoAvatarUrl); 
        
    } catch (error) {
        console.error('Erro ao enviar avatar:', error);
        alert(`Erro ao atualizar foto: ${error.message}.`);
    } finally {
        const inputAvatar = document.getElementById('input-avatar');
        if (inputAvatar) inputAvatar.value = ''; 
    }
}

// 🔑 FUNÇÃO PARA ATUALIZAR A IMAGEM NA TELA E SESSÃO
function atualizarFotoDePerfil(novoCaminho) {
    const urlCompleta = `${URL_BASE_DA_API}/${novoCaminho}`;
    
    // 1. Salva o caminho do avatar na sessão para ser usado em outras páginas (ex: chat)
    sessionStorage.setItem('userAvatarPath', novoCaminho); 
    
    // 2. Atualiza a foto na tela principal
    const fotoPrincipal = document.querySelector('.photo-profile');
    if (fotoPrincipal) {
        // Se a foto é definida como background-image (como está no seu CSS)
        fotoPrincipal.style.backgroundImage = `url('${urlCompleta}')`;
    }
    
    // 3. Recarrega a página para garantir que listas de usuários e o chat recebam a nova foto
    window.location.reload(); 
}

// 🔑 FUNÇÃO PARA CARREGAR A FOTO SALVA AO INICIAR
function carregarFotoDePerfilInicial() {
    const caminhoSalvo = sessionStorage.getItem('userAvatarPath');
    const fotoPrincipal = document.querySelector('.photo-profile');
    
    // Se houver um caminho salvo e um elemento para exibir a foto
    if (caminhoSalvo && fotoPrincipal) {
        const urlCompleta = `${URL_BASE_DA_API}/${caminhoSalvo}`;
        fotoPrincipal.style.backgroundImage = `url('${urlCompleta}')`;
    }
}