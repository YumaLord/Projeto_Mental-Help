const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app';
const listaDiv = document.querySelector('.lista');
const inputBusca = document.getElementById('input-nome-email');
const botaoBuscar = document.getElementById('botao-buscar');

let todosPsicologos = [];

async function carregarPsicologos() {
    const userRole = sessionStorage.getItem("userRole"); 
    
    if (userRole !== 'ALUNO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Apenas Alunos podem ver esta lista.</p>';
        return;
    }

    listaDiv.innerHTML = '<p>Carregando lista de psicólogos...</p>';

    try {
        // ⬅️ CORREÇÃO: Removido o prefixo '/usuario' da URL
        const response = await fetch(URL_BASE_DA_API + '/usuarios/PSICOLOGO');
        
        if (!response.ok) {
            listaDiv.innerHTML = '<p>Erro ao carregar lista de psicólogos. Servidor não respondeu corretamente.</p>';
            return;
        }

        todosPsicologos = await response.json();

        if (todosPsicologos.length === 0) {
            listaDiv.innerHTML = '<p>Nenhum psicólogo cadastrado no momento.</p>';
            return;
        }

        renderizarLista(todosPsicologos);

    } catch (error) {
        console.error('Erro de rede ao buscar psicólogos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar psicólogos.</p>';
    }
}


// Faz a busca localmente na lista
function filtrarPsicologos() {
    const termo = inputBusca.value.trim().toLowerCase().replace(/[.\-\/]/g, '');

    if (!termo) {
        renderizarLista(todosPsicologos);
        return;
    }

    const resultados = todosPsicologos.filter(psicologo => {
        const nome = psicologo.nome ? psicologo.nome.toLowerCase() : '';
        const email = psicologo.email ? psicologo.email.toLowerCase() : '';
        const cpf = psicologo.cpf ? psicologo.cpf.replace(/\D/g, '').toLowerCase() : ''; 

        return nome.includes(termo) || email.includes(termo) || cpf.includes(termo);
    });

    renderizarLista(resultados);
}

// Exibe os itens na tela
function renderizarLista(psicologos) { 
    if (psicologos.length === 0) {
        listaDiv.innerHTML = '<p>Nenhum psicólogo encontrado com o termo de busca.</p>';
        return;
    }

    const htmlPsicologos = psicologos.map(psicologo => {
        const avatarUrl = psicologo.avatar ? `${URL_BASE_DA_API}/${psicologo.avatar}` : null;
        const styleAvatar = avatarUrl ? `style="background-image: url('${avatarUrl}');"` : '';
        const cpfExibido = psicologo.cpf ? psicologo.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") : 'N/A';
        
        return `
            <div class="item" data-user-id="${psicologo.id}">
                <div class="icone ${psicologo.avatar ? 'has-avatar' : 'default'}" ${styleAvatar}></div>
                <span>
                    ${psicologo.nome} (${psicologo.apelido || 'Sem Apelido'}): 
                    <br>
                    Email: ${psicologo.email} | CPF: ${cpfExibido}
                </span>
                <button onclick="iniciarChat(${psicologo.id}, '${psicologo.nome}')">Iniciar Chat</button>
            </div>
        `;
    }).join('');

    listaDiv.innerHTML = htmlPsicologos;
}

function iniciarChat(userId, userName) {
    const chatUrl = `chat.html?targetId=${userId}&targetName=${userName}`;
    window.location.href = chatUrl;
}

carregarPsicologos();
botaoBuscar.addEventListener('click', filtrarPsicologos);
inputBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        filtrarPsicologos();
    }
});