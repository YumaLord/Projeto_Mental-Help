function closeModal(){
  let modal = document.querySelector(".card")
  modal.classList.add("disable")
}

function showModal(){
  let modal = document.querySelector(".card")
  modal.classList.remove("disable")
}

function deslogarUsuario() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userRole"); 
    sessionStorage.removeItem("userId");
    
    closeModal();

    //Redireciona tela login
    window.location.href = "Login-interface.html";
}