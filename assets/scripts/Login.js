const url = "https://6w5tw6-3002.csb.app"

document.querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    
    login(email, senha)
})


const ROTA_ALUNO = "procurar_psicologo.html";
const ROTA_PSICOLOGO = "procurar_aluno.html";


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
        sessionStorage.setItem("userRole", json.tipo); 
        sessionStorage.setItem("userId", json.userId || json.id); 
        
        // ✨ CORREÇÃO CRÍTICA AQUI: SALVAR O CAMINHO DO AVATAR ✨
        if (json.avatar) {
            sessionStorage.setItem("userAvatarPath", json.avatar);
        } else {
            // Se o usuário não tiver foto, garantimos que o valor antigo seja removido
            sessionStorage.removeItem("userAvatarPath"); 
        }
        
        const tipoUsuario = json.tipo;
    if (tipoUsuario === "ALUNO") {
        alert("Login de aluno realizado com sucesso! Redirecionando para busca.");
        window.location.href = ROTA_ALUNO;
    } else if (tipoUsuario === "PSICOLOGO") {
        alert("Login de psicólogo realizado com sucesso! Redirecionando para a lista de alunos.");
        window.location.href = ROTA_PSICOLOGO;
    } else {
        alert("Tipo de usuário desconhecido. Redirecionando para interface padrão.");
        window.location.href = "interface.html"; 
    }

  } else {
      alert("Falha no login. Verifique seu e-mail e senha.");
  }
}