const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 
const listaDiv = document.querySelector('.lista');
const inputBusca = document.getElementById('input-nome-email');
const botaoBuscar = document.getElementById('botao-buscar');
const TIPO_BUSCADO = 'ALUNO'; 

let todosAlunos = [];

async function carregarAlunos() {
    const token = sessionStorage.getItem("token"); 
    const userRole = sessionStorage.getItem("userRole"); 

    if (!token || userRole !== 'PSICOLOGO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Faça login como Psicólogo para ver esta lista.</p>';
        return;
    }

    listaDiv.innerHTML = '<p>Carregando lista de alunos...</p>';

    try {
        const response = await fetch(`${URL_BASE_DA_API}/usuarios/${TIPO_BUSCADO}`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            if (response.status === 401 || response.status === 403) {
                 listaDiv.innerHTML = '<p>Acesso Negado. Sua sessão expirou ou não possui permissão.</p>';
                 return;
            }
            listaDiv.innerHTML = '<p>Erro ao carregar lista de alunos. Servidor não respondeu corretamente.</p>';
            return;
        }

        todosAlunos = await response.json();

        if (todosAlunos.length === 0) {
            listaDiv.innerHTML = '<p>Nenhum aluno cadastrado no momento.</p>';
            return;
        }

        // Exibe alunos
        renderizarLista(todosAlunos);

    } catch (error) {
        console.error('Erro de rede ao buscar alunos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar alunos.</p>';
    }
}


// Faz busca lista carregada
function filtrarAlunos() {
    const termo = inputBusca.value.trim().toLowerCase();

    if (!termo) {
        renderizarLista(todosAlunos);
        return;
    }

    const resultados = todosAlunos.filter(aluno => {
        const nome = aluno.nome ? aluno.nome.toLowerCase() : '';
        const email = aluno.email ? aluno.email.toLowerCase() : '';

        // filtra por nome ou email
        return nome.includes(termo) || email.includes(termo);
    });

    renderizarLista(resultados);
}

function renderizarLista(alunos) {
    if (alunos.length === 0) {
        listaDiv.innerHTML = '<p>Nenhum aluno encontrado com o termo de busca.</p>';
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
                    <br>
                    Email: ${aluno.email}
                    </span>
                <button onclick="iniciarChat(${aluno.id}, '${aluno.nome}')">Iniciar Chat</button>
            </div>
        `;
    }).join('');

    listaDiv.innerHTML = htmlAlunos;
}

function iniciarChat(userId, userName) {
    const chatUrl = `chat.html?targetId=${userId}&targetName=${userName}`;
    window.location.href = chatUrl;
}

carregarAlunos();
botaoBuscar.addEventListener('click', filtrarAlunos);
inputBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filtrarAlunos();
    }
});