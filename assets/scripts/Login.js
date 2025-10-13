document.querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const matricula = document.querySelector("#matricula").value
    const senha = document.querySelector("#senha").value
    login(matricula, senha)
})

async function login(matricula, senha) {
  console.log({ matricula, senha })
  const resposta = await fetch("https://lxmjjp-3000.csb.app/login", {
    method: "POST",
    body: JSON.stringify({
      matricula,
      senha
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const json = await resposta.json()
  sessionStorage.setItem("token", json.token)
  window.location.href = "chat.html"
}