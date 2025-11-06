const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 
const listaDiv = document.querySelector('.lista');

async function carregarAlunos() {
    const userRole = sessionStorage.getItem("userRole"); 
    
    //Verificação de Acesso
    if (userRole !== 'PSICOLOGO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Apenas Psicólogos podem ver esta lista.</p>';
        return;
    }

    listaDiv.innerHTML = '<p>Carregando lista de alunos...</p>';

    try {

        const response = await fetch(URL_BASE_DA_API + '/usuarios/ALUNO');
        
        if (!response.ok) {
            listaDiv.innerHTML = '<p>Erro ao carregar lista de alunos. Servidor não respondeu corretamente.</p>';
            return;
        }

        const alunos = await response.json();

        if (alunos.length === 0) {
            listaDiv.innerHTML = '<p>Nenhum aluno cadastrado no momento.</p>';
            return;
        }


        const htmlAlunos = alunos.map(aluno => `
            <div class="item" data-user-id="${aluno.id}">
                <div class="icone ${aluno.avatar ? 'has-avatar' : 'default'}"></div>
                <span>
                    ${aluno.nome} (${aluno.apelido || 'Sem Apelido'}): 
                    ${aluno.email}
                </span>
                <button onclick="iniciarChat(${aluno.id}, '${aluno.nome}')">Iniciar Chat</button>
            </div>
        `).join('');

        listaDiv.innerHTML = htmlAlunos;

    } catch (error) {
        console.error('Erro de rede ao buscar alunos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar alunos.</p>';
    }
}

function iniciarChat(userId, userName) {
    alert(`Iniciando chat com o aluno(a) ${userName} (ID: ${userId}).`);
    // Aqui viria o código para redirecionar para o chat.html
}

carregarAlunos();