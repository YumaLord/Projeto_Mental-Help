// NO ARQUIVO login.js
const url = "https://6w5tw6-3002.csb.app"


document.querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    
    // O campo 'tipo' não é necessário para o login (apenas email e senha).
    // O tipo será retornado pelo Back-end.
    
    login(email, senha)
})

/**
 * Rota para onde o ALUNO deve ser redirecionado.
 * Assumindo que a interface principal do aluno é a busca por psicólogos.
 */
const ROTA_ALUNO = "procurar_psicologo.html";

/**
 * Rota para onde o PSICOLOGO deve ser redirecionado.
 * Assumindo que a interface principal do psicólogo é o chat/consultas.
 */
const ROTA_PSICOLOGO = "chat.html"; 


async function login(email, senha) {
  console.log({ email, senha })
  const resposta = await fetch(url + "/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      senha
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  
  if( resposta.ok ) {

    const json = await resposta.json()
    sessionStorage.setItem("token", json.token)
    
    // CRÍTICO: ASSUMINDO que o Back-end retorna o tipo de usuário no JSON:
    // Exemplo: { token: "...", tipo: "ALUNO" }
    const tipoUsuario = json.tipo; 
    
    if (tipoUsuario === "ALUNO") {
        alert("Login de aluno realizado com sucesso! Redirecionando para busca.");
        window.location.href = ROTA_ALUNO;
    } else if (tipoUsuario === "PSICOLOGO") {
        alert("Login de psicólogo realizado com sucesso! Redirecionando para o chat/consultas.");
        window.location.href = ROTA_PSICOLOGO;
    } else {
        alert("Tipo de usuário desconhecido. Redirecionando para interface padrão.");
        // Redirecionamento padrão caso algo dê errado
        window.location.href = "interface.html"; 
    }

  } else {
      alert("Falha no login. Verifique seu e-mail e senha.");
  }
}