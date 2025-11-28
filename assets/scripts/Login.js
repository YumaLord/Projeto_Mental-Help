const url = "";

// Rotas de redirecionamento
const ROTA_ALUNO = "/procurar_psicologo";
const ROTA_PSICOLOGO = "/procurar_aluno";
const ROTA_PADRAO = "/";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  login(email, senha);
});

async function login(email, senha) {
  console.log({ email, senha });

  try {
    const resposta = await fetch(url + "/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        senha,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await resposta.json();

    if (resposta.ok) {
      sessionStorage.setItem("token", json.token);
      sessionStorage.setItem("userRole", json.tipo);
      sessionStorage.setItem("userId", json.userId || json.id);

      if (json.avatar) {
        sessionStorage.setItem("userAvatarPath", json.avatar);
      } else {
        sessionStorage.removeItem("userAvatarPath");
      }

      const tipoUsuario = json.tipo;

      if (tipoUsuario === "ALUNO") {
        alert(
          "Login de aluno realizado com sucesso! Redirecionando para busca."
        );
        window.location.href = ROTA_ALUNO;
      } else if (tipoUsuario === "PSICOLOGO") {
        alert(
          "Login de psicólogo realizado com sucesso! Redirecionando para a lista de alunos."
        );
        window.location.href = ROTA_PSICOLOGO;
      } else {
        alert(
          "Tipo de usuário desconhecido. Redirecionando para interface padrão."
        );
        window.location.href = ROTA_PADRAO;
      }
    } else {
      const mensagemErro = json.message || "Verifique seu e-mail e senha.";
      alert(`Falha no login: ${mensagemErro}`);
    }
  } catch (error) {
    console.error("Erro de rede durante o login:", error);
    alert(
      "Não foi possível conectar ao servidor. Verifique sua conexão ou se a API está rodando."
    );
  }
}
