function verificarLogin() {
    if (!sessionStorage.getItem('userRole')) {
        // Redireciona pra login
        window.location.href = 'Login-interface.html';
    }
}

verificarLogin();