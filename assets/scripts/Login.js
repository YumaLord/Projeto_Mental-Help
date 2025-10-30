const url = "https://6w5tw6-3000.csb.app"


document.querySelector("form")
  .addEventListener("submit", (event) => {
    event.preventDefault()
    const email = document.querySelector("#email").value
    const senha = document.querySelector("#senha").value
    login(email, senha)
})

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

  const json = await resposta.json()
  sessionStorage.setItem("token", json.token)
  window.location.href = "chat.html"
}