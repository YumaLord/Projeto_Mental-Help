const jwt = require("jsonwebtoken");

function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido." });
  }

  jwt.verify(token, "Chave-secreta-123", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado." });
    }
    req.user = user;

    next();
  });
}

module.exports = { autenticarToken };