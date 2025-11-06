const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { db } = require("../db");
const bcrypt = require("bcryptjs");
const rotaLogin = Router();

rotaLogin.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await db.usuario.findFirst({
      where: { email },
    });

    if (!usuario) {
      return res.status(401).json({ mensagem: "Email ou senha inválida" });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ mensagem: "Email ou senha inválida" });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        tipo: usuario.tipo,
      },
      "Chave-secreta-123",
      { expiresIn: "1h" }
    );

    res.json({
      token,
      tipo: usuario.tipo,
      userId: usuario.id,
    });
  } catch (error) {
    console.error("Erro no Login:", error);

    res
      .status(500)
      .json({ mensagem: "Erro interno do servidor durante o login" });
  }
});

module.exports = { rotaLogin };
