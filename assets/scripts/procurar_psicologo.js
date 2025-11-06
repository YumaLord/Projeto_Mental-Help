// Conteúdo do arquivo: procurar_psicologo.js
const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; // VERIFIQUE A PORTA DO SEU SERVIDOR
const listaDiv = document.querySelector('.lista');

async function carregarPsicologos() {
    const userRole = sessionStorage.getItem("userRole"); 
    
    // 1. Verificação de Acesso: Apenas Alunos podem procurar Psicólogos
    if (userRole !== 'ALUNO') {
        listaDiv.innerHTML = '<p>🛑 Acesso Negado. Apenas Alunos podem ver esta lista.</p>';
        return;
    }

    // Limpa o conteúdo estático (Arthur, Ronaldo, Roberto)
    listaDiv.innerHTML = '<p>Carregando lista de psicólogos...</p>';

    try {
        // 2. Faz a requisição para buscar usuários do tipo PSICOLOGO
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

        // 3. Monta o HTML dinamicamente
        const htmlPsicologos = psicologos.map(psicologo => `
            <div class="item" data-user-id="${psicologo.id}">
                <div class="icone ${psicologo.avatar ? 'has-avatar' : 'default'}"></div>
                <span>
                    ${psicologo.nome} (${psicologo.apelido || 'Sem Apelido'}): 
                    ${psicologo.email}
                </span>
                <button onclick="iniciarChat(${psicologo.id}, '${psicologo.nome}')">Iniciar Chat</button>
            </div>
        `).join('');

        listaDiv.innerHTML = htmlPsicologos;

    } catch (error) {
        console.error('Erro de rede ao buscar psicólogos:', error);
        listaDiv.innerHTML = '<p>Não foi possível conectar ao servidor para buscar psicólogos.</p>';
    }
}

// Função que será chamada ao clicar em "Iniciar Chat"
function iniciarChat(userId, userName) {
    alert(`Iniciando chat com o psicólogo(a) ${userName} (ID: ${userId}).`);
    // Lógica real de redirecionamento para o chat.html com o parceiro:
    // window.location.href = `chat.html?partnerId=${userId}`;
}

// Executa a função ao carregar a página
carregarPsicologos();