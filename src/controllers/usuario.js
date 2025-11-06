const { Router } = require("express");
const { db } = require("../db");
const bcrypt = require("bcryptjs");
const rotasUsuario = Router();

rotasUsuario.get("/usuarios/:tipo", async (req, res) => {
  const { tipo } = req.params;

  if (tipo !== "ALUNO" && tipo !== "PSICOLOGO") {
    return res
      .status(400)
      .json({ message: "Tipo de usuário inválido para busca." });
  }

  try {
    const usuarios = await db.usuario.findMany({
      where: {
        tipo: tipo,
      },
      select: {
        id: true,
        nome: true,
        avatar: true,
        apelido: true,
        email: true,
        idade: true,
        tipo: true,
      },
    });

    res.json(usuarios);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro interno ao buscar usuários." });
  }
});

rotasUsuario.post("/cadastro", async (req, res) => {
  const { nome, avatar, idade, email, senha, apelido, tipo } = req.body;

  if (!email || !nome || !senha || !tipo) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios, incluindo o tipo de usuário.",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = await db.usuario.create({
      data: {
        nome,
        avatar: avatar || "default.jpg",
        idade: idade || 0,
        email,
        senha: senhaHash,
        apelido: apelido || nome,
        tipo: tipo,
      },
    });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      userId: novoUsuario.id,
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);
    if (error.code === "P2002") {
      return res.status(409).json({ message: "E-mail já cadastrado." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

rotasUsuario.delete("/usuarios/:id", async (req, res) => {
  await db.usuario.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ sucesso: "ok" });
});

module.exports = { rotasUsuario };
