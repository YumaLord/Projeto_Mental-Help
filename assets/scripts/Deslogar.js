const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';

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
    sessionStorage.removeItem("userAvatarPath");
    
    closeModal();

    window.location.href = "Login-interface.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.getElementById('input-avatar');

    carregarFotoDePerfilInicial();
    
    if (inputAvatar) {
        inputAvatar.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                enviarAvatar(e.target.files[0]);
                closeModal();
            }
        });
    }
});

async function enviarAvatar(arquivo) {
    const token = sessionStorage.getItem('token'); 
    const userId = sessionStorage.getItem('userId'); 
    if (!userId || userId === 'null' || !token) {
        alert("Erro: Você precisa estar logado para atualizar o avatar.");
        console.error("Tentativa de upload de avatar falhou: userId ou token ausente na sessionStorage.");
        const inputAvatar = document.getElementById('input-avatar');
        if (inputAvatar) inputAvatar.value = ''; 
        return;
        
    }

    const formData = new FormData();
    formData.append('arquivo', arquivo); 

    try {
        const response = await fetch(`${URL_BASE_DA_API}/usuario/avatar/${userId}`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}` 
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: response.statusText }));
            throw new Error(`Falha no upload do avatar. Status: ${response.status}. Detalhes: ${errorData.message}`);
        }

        const data = await response.json();
        alert("Foto de perfil atualizada com sucesso!");
        atualizarFotoDePerfil(data.newAvatarPath); 
        
    } catch (error) {
        console.error('Erro ao enviar avatar:', error);
        alert(`Erro ao atualizar foto: ${error.message}.`);
    } finally {
        const inputAvatar = document.getElementById('input-avatar');
        if (inputAvatar) inputAvatar.value = ''; 
    }
}
function atualizarFotoDePerfil(novoCaminho) {
    const urlCompleta = `${URL_BASE_DA_API}/${novoCaminho}`;
    sessionStorage.setItem('userAvatarPath', novoCaminho); 
    const fotoPrincipal = document.querySelector('.photo-profile');
    if (fotoPrincipal) {
        fotoPrincipal.style.backgroundImage = `url('${urlCompleta}')`;
    }

    window.location.reload(); 
}

function carregarFotoDePerfilInicial() {
    const caminhoSalvo = sessionStorage.getItem('userAvatarPath');
    const fotoPrincipal = document.querySelector('.photo-profile');
    
    if (caminhoSalvo && fotoPrincipal) {
        const urlCompleta = `${URL_BASE_DA_API}/${caminhoSalvo}`;
        fotoPrincipal.style.backgroundImage = `url('${urlCompleta}')`;
    }
}