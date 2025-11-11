const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';
const listaDiv = document.querySelector('.lista');

async function carregarPsicologos() {
    const userRole = sessionStorage.getItem("userRole"); 
    
    if (userRole !== 'ALUNO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Apenas Alunos podem ver esta lista.</p>';
        return;
    }

    listaDiv.innerHTML = '<p>Carregando lista de psicólogos...</p>';

    try {
        // Assume que o Back-end está incluindo o campo 'avatar' na resposta
        const response = await fetch(URL_BASE_DA_API + '/usuarios/PSICOLOGO');
        
        if (!response.ok) {
            listaDiv.innerHTML = '<p>Erro ao carregar lista de psicólogos. Servidor não respondeu corretamente.</p>';
            return;
        }

        const psicologos = await response.json();

        if (psicologos.length === 0) {
            listaDiv.innerHTML = '<p>Nenhum psicólogo cadastrado no momento.</p>';
            return;
        }

        const htmlPsicologos = psicologos.map(psicologo => {
            // 🔑 LÓGICA DO AVATAR: Se houver caminho de avatar, cria a URL completa.
            const avatarUrl = psicologo.avatar ? `${URL_BASE_DA_API}/${psicologo.avatar}` : null;
            const styleAvatar = avatarUrl ? `style="background-image: url('${avatarUrl}');"` : '';
            
            return `
                <div class="item" data-user-id="${psicologo.id}">
                    <div class="icone ${psicologo.avatar ? 'has-avatar' : 'default'}" ${styleAvatar}></div>
                    <span>
                        ${psicologo.nome} (${psicologo.apelido || 'Sem Apelido'}): 
                        ${psicologo.email}
                    </span>
                    <button onclick="iniciarChat(${psicologo.id}, '${psicologo.nome}')">Iniciar Chat</button>
                </div>
            `;
        }).join('');

        listaDiv.innerHTML = htmlPsicologos;

    } catch (error) {
        console.error('Erro de rede ao buscar psicólogos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar psicólogos.</p>';
    }
}

function iniciarChat(userId, userName) {
    
    const chatUrl = `chat.html?targetId=${userId}&targetName=${userName}`;

    window.location.href = chatUrl;
}

carregarPsicologos();