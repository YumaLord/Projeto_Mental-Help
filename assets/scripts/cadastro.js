const URL_BASE_DA_API = 'https://6w5tw6-3002.csb.app'; 


const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const nomeInput = document.querySelector('input[type="text"]');
const senhaInputs = document.querySelectorAll('input[type="password"]');
const senhaInput = senhaInputs[0]; 
const confirmarSenhaInput = senhaInputs[1];
const tipoInput = document.getElementById('tipo');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const email = emailInput.value;
    const nome = nomeInput.value;
    const senha = senhaInput.value;
    const confirmarSenha = confirmarSenhaInput.value;
    const tipo = tipoInput.value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
    }
    
    const userData = { 
        email, 
        nome, 
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
            window.location.href = 'login.html'; 
        } else {
            alert(`Erro ao cadastrar: ${data.message || 'Verifique os dados informados.'}`);
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        alert('Não foi possivel conectar ao servidor. Verifique CodeSandbox esta rodando.');
    }
});