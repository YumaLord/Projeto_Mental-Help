const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';
// Definimos o caminho do avatar padrão aqui. 
// Certifique-se de que este arquivo existe no seu projeto.
const AVATAR_PADRAO = '../assets/img/Aluno exemplo.jpg'; 

// --- Funções do Modal ---

function closeModal(){
    let modal = document.getElementById("modal-sair");
    if (modal) {
        modal.classList.add("disable");
    }
}

function showModal(){
    let modal = document.getElementById("modal-sair");
    if (modal) {
        modal.classList.remove("disable");
    }
}

function deslogarUsuario() {
    // IMPORTANTE: Limpa todos os dados da sessão
    sessionStorage.clear(); 
    
    closeModal();

    // Redireciona para a página de login
    window.location.href = "Login-interface.html";
}

// --- Inicialização e Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.getElementById('input-avatar');

    carregarFotoDePerfilInicial(); // Tenta carregar a foto salva
    
    if (inputAvatar) {
        inputAvatar.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                enviarAvatar(e.target.files[0]);
                closeModal();
            }
        });
    }
});

// --- Lógica de Upload ---

async function enviarAvatar(arquivo) {
    const token = sessionStorage.getItem('token'); 
    const userIdString = sessionStorage.getItem('userId'); 
    
    // Converte userId para número. 
    const userId = parseInt(userIdString);
    
    if (isNaN(userId) || !token) {
        console.error("Erro: Você precisa estar logado (ID ou Token ausente/inválido) para atualizar o avatar.");
        const inputAvatar = document.getElementById('input-avatar');
        if (inputAvatar) inputAvatar.value = ''; 
        alert("Erro no envio: ID de usuário ou Token não encontrado. Tente logar novamente.");
        return;
    }

    const formData = new FormData();
    // MUDANÇA: Usando 'avatar' como nome do campo de arquivo (provável correção para 404/500)
    formData.append('avatar', arquivo); 
    
    // Mensagem de feedback visual
    alert("Tentando enviar a foto de perfil. Aguarde...");

    try {
        // ROTA USADA: /usuario/avatar (Servidor deve usar o ID do Token)
        const response = await fetch(`${URL_BASE_DA_API}/usuario/avatar`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}` 
            },
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Falha no upload do avatar. Status: ${response.status}. Resposta: ${errorText}`);
            
            let erroDetalhado = `Status: ${response.status}.`;
            if (response.status === 404) {
                 erroDetalhado += " A rota de upload pode estar incorreta no servidor (Back-end)."
            } else if (response.status === 500) {
                 erroDetalhado += " O servidor teve um erro interno (Back-end). Verifique se o nome do campo é 'avatar'."
            }
            alert(`Erro ao atualizar foto: Falha no upload. ${erroDetalhado}`);
            return;
        }

        const data = await response.json();
        console.log("Foto de perfil atualizada com sucesso!", data);
        
        // Assume que a API retorna o novo caminho da foto no campo 'newAvatarPath' ou 'avatar'
        const novoCaminho = data.newAvatarPath || data.avatar;

        if (novoCaminho) {
             atualizarFotoDePerfil(novoCaminho); 
             alert("Foto de perfil atualizada com sucesso!");
        } else {
             console.warn("Upload bem-sucedido, mas o novo caminho do avatar não foi retornado pela API. Recarregando...");
             window.location.reload(); 
        }

    } catch (error) {
        console.error('Erro de rede ao enviar avatar:', error);
        alert('Erro de rede ao enviar avatar. Verifique sua conexão ou a URL da API.');
    } finally {
        // Limpa o input file para permitir novo upload
        const inputAvatar = document.getElementById('input-avatar');
        if (inputAvatar) inputAvatar.value = ''; 
    }
}

// --- Funções de Exibição de Avatar ---

function atualizarFotoDePerfil(novoCaminho) {
    const urlCompleta = `${URL_BASE_DA_API}/${novoCaminho}`;
    // Salva o novo caminho na sessão para que persista
    sessionStorage.setItem('userAvatarPath', novoCaminho); 
    
    // Atualiza o elemento de perfil na tela usando o ID 'perfil-avatar' do interface.html
    const fotoPrincipal = document.getElementById('perfil-avatar');
    if (fotoPrincipal) {
        fotoPrincipal.style.backgroundImage = `url('${urlCompleta}')`;
        fotoPrincipal.classList.add('has-avatar'); 
    }

    // Recarrega a página para que o avatar seja exibido em todas as outras páginas
    window.location.reload(); 
}

function carregarFotoDePerfilInicial() {
    const caminhoSalvo = sessionStorage.getItem('userAvatarPath');
    const fotoPrincipal = document.getElementById('perfil-avatar'); 
    
    if (fotoPrincipal) {
        let urlParaExibir = '';
        
        if (caminhoSalvo) {
            // Se houver caminho salvo, usa o caminho da API
            urlParaExibir = `${URL_BASE_DA_API}/${caminhoSalvo}`;
            fotoPrincipal.classList.add('has-avatar');
        } else {
            // Se não houver caminho salvo (novo login sem foto), usa o padrão
            urlParaExibir = AVATAR_PADRAO;
            fotoPrincipal.classList.remove('has-avatar');
        }
        
        // Define o background-image, garantindo que o padrão seja carregado se o caminho estiver vazio/nulo
        fotoPrincipal.style.backgroundImage = `url('${urlParaExibir}')`;
    }
}