/**
    @returns {number | null}
 **/
function getRemetenteIdFromToken() {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
        console.error("Token não encontrado na sessionStorage.");
        return null;
    }

    try {
        const decoded = jwt_decode(token);
        return decoded.id; 
        
    } catch (error) {
        console.error("Erro ao decodificar token:", error);
        return null;
    }
}