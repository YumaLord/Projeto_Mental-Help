const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 

const form = document.querySelector('form');
const emailInput = document.getElementById('input-email'); 
const nomeInput = document.getElementById('input-nome');   
const cpfInput = document.getElementById('input-cpf');     
const senhaInput = document.getElementById('input-senha');
const confirmarSenhaInput = document.getElementById('input-confirmar-senha');
const tipoInput = document.getElementById('input-tipo');

cpfInput.addEventListener('input', formatarCPF);

function formatarCPF(event) {
    let value = event.target.value.replace(/\D/g, "");
    value = value.substring(0, 11);

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
    const userData = { 
        email, 
        nome, 
        cpf,
        senha, 
        avatar: "tomas", 
        idade: 18, 
        apelido: "to",
        tipo
    }; 
    
    try {
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