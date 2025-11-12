const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 
const listaDiv = document.querySelector('.lista');
const TIPO_BUSCADO = 'ALUNO'; 

async function carregarAlunos() {
    const token = sessionStorage.getItem("token"); 
    const userRole = sessionStorage.getItem("userRole"); 

    if (!token || userRole !== 'PSICOLOGO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Faça login como Psicólogo para ver esta lista.</p>';
        return;
    }

    listaDiv.innerHTML = '<p>Carregando lista de alunos...</p>';

    try {
        // CORREÇÃO: Adicionando o prefixo '/usuario' aqui
        const response = await fetch(`${URL_BASE_DA_API}/usuario/usuarios/${TIPO_BUSCADO}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                 listaDiv.innerHTML = '<p>🛑 Acesso Negado. Sua sessão expirou.</p>';
                 return;
            }
            listaDiv.innerHTML = '<p>Erro ao carregar lista de alunos. Servidor não respondeu corretamente.</p>';
            return;
        }

        const alunos = await response.json();

        if (alunos.length === 0) {
            listaDiv.innerHTML = '<p>Nenhum aluno cadastrado no momento.</p>';
            return;
        }

        const htmlAlunos = alunos.map(aluno => {
            const avatarUrl = aluno.avatar ? `${URL_BASE_DA_API}/${aluno.avatar}` : null;
            const styleAvatar = avatarUrl ? `style="background-image: url('${avatarUrl}');"` : '';
            
            return `
                <div class="item" data-user-id="${aluno.id}">
                    <div class="icone ${aluno.avatar ? 'has-avatar' : 'default'}" ${styleAvatar}></div>
                    <span>
                        ${aluno.nome} (${aluno.apelido || 'Sem Apelido'}): 
                        ${aluno.email}
                    </span>
                    <button onclick="iniciarChat(${aluno.id}, '${aluno.nome}')">Iniciar Chat</button>
                </div>
            `;
        }).join('');

        listaDiv.innerHTML = htmlAlunos;

    } catch (error) {
        console.error('Erro de rede ao buscar alunos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar alunos.</p>';
    }
}

function iniciarChat(userId, userName) {
    // Corrigindo a mensagem de alerta para não usar a função alert()
    const alertMessage = `Iniciando chat com o aluno(a) ${userName} (ID: ${userId}).`; 
    console.log(alertMessage); 
    window.location.href = `chat.html?targetId=${userId}&targetName=${userName}`;
}

carregarAlunos();