const { Router } = require("express");
const { db } = require("../db"); // Assumindo que o arquivo '../db.js' tem a instância do Prisma
const bcrypt = require("bcryptjs"); // Importação do bcrypt para segurança
const rotasUsuario = Router();

// ==========================================================
// ROTA DE LISTAGEM POR TIPO (GET /usuarios/:tipo)
// A rota geral '/usuarios' não é mais usada para listas
// ==========================================================
rotasUsuario.get("/usuarios/:tipo", async (req, res) => {
  const { tipo } = req.params; // Captura o tipo (ALUNO ou PSICOLOGO)

  // Validação para garantir que o Front-end envie um tipo válido
  if (tipo !== "ALUNO" && tipo !== "PSICOLOGO") {
    return res
      .status(400)
      .json({ message: "Tipo de usuário inválido para busca." });
  }

  try {
    const usuarios = await db.usuario.findMany({
      where: {
        tipo: tipo, // Filtra pelo tipo
      },
      select: {
        // Retorna apenas os dados que o Front-end precisa para a lista
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

// ==========================================================
// ROTA DE CADASTRO (POST /usuarios)
// No Front-end, mudamos a URL para /cadastro, mas esta rota é quem realmente cria.
// ==========================================================
rotasUsuario.post("/cadastro", async (req, res) => {
  // CRÍTICO: Capturando o campo 'tipo' e os dados
  const { nome, avatar, idade, email, senha, apelido, tipo } = req.body;

  if (!email || !nome || !senha || !tipo) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios, incluindo o tipo de usuário.",
    });
  }

  try {
    // CRÍTICO: Criptografa a senha antes de salvar
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = await db.usuario.create({
      data: {
        nome,
        avatar: avatar || "default.jpg",
        idade: idade || 0,
        email,
        senha: senhaHash, // Salva a senha criptografada
        apelido: apelido || nome,
        tipo: tipo, // Salva o tipo (ALUNO/PSICOLOGO)
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

// ==========================================================
// ROTA DE DELETAR (DELETE /usuarios/:id)
// ==========================================================
rotasUsuario.delete("/usuarios/:id", async (req, res) => {
  await db.usuario.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ sucesso: "ok" });
});

module.exports = { rotasUsuario };
