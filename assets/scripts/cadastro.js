const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 

const form = document.querySelector('form');
const emailInput = document.getElementById('input-email'); // Usando ID
const nomeInput = document.getElementById('input-nome');   // Usando ID
const cpfInput = document.getElementById('input-cpf');     // NOVO CAMPO
const senhaInput = document.getElementById('input-senha');
const confirmarSenhaInput = document.getElementById('input-confirmar-senha');
const tipoInput = document.getElementById('input-tipo'); // Usando ID

// Adiciona a máscara de CPF ao carregar a página
cpfInput.addEventListener('input', formatarCPF);

// Função para formatar o CPF (máscara: 000.000.000-00)
function formatarCPF(event) {
    let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    value = value.substring(0, 11); // Limita a 11 dígitos

    if (value.length > 9) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3");
    } else if (value.length > 3) {
        value = value.replace(/(\d{3})(\d{3})/, "$1.$2");
    }
    event.target.value = value;
}


form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const email = emailInput.value;
    const nome = nomeInput.value;
    const cpf = cpfInput.value.replace(/\D/g, ""); // Remove a máscara para enviar APENAS os dígitos
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const tipo = tipoInput.value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
    }

    if (cpf.length !== 11) {
        alert('Por favor, insira um CPF válido com 11 dígitos.');
        return;
    }

    // Incluído o campo 'cpf' no JSON de envio
    const userData = { 
        email, 
        nome, 
        cpf, // <-- NOVO CAMPO CPF
        senha, 
        avatar: "tomas", 
        idade: 18, 
        apelido: "to",
        tipo
    }; 
    
    try {
        // Atenção: Seu endpoint é '/cadastro', e não '/usuario/cadastro'
        const response = await fetch(URL_BASE_DA_API + '/cadastro', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Cadastro realizado com sucesso! Você já pode fazer login.');
            
            window.location.href = 'Login-interface.html'; 
            
        } else {
            alert(`Erro ao cadastrar: ${data.message || 'Verifique os dados informados.'}`);
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        alert('Não foi possivel conectar ao servidor. Verifique CodeSandbox esta rodando.');
    }
});