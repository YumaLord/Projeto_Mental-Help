// NO ARQUIVO: decode.js (CÓDIGO ÚNICO E COMPLETO)

/**
 * Função para decodificar o token JWT armazenado na sessionStorage
 * e retornar o ID do usuário logado.
 * @returns {number | null} O ID do usuário logado ou null em caso de falha.
 */
function getRemetenteIdFromToken() {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
        console.error("Token não encontrado na sessionStorage.");
        return null;
    }

    try {
        // Assume que a função jwt_decode() está disponível globalmente via script no HTML.
        const decoded = jwt_decode(token);
        
        // Retorna o ID do usuário que está no payload do token
        // Certifique-se de que o campo 'id' é o que o seu Back-end usa no Token JWT.
        return decoded.id; 
        
    } catch (error) {
        console.error("Erro ao decodificar token:", error);
        return null;
    }
}