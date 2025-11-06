const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const { rotasUsuario } = require("./controllers/usuario.js");
const { rotaLogin } = require("./controllers/login.js");

app.use(rotasUsuario);
app.use(rotaLogin);

const app = express();

const prisma = new PrismaClient();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/cadastro", async (req, res) => {
  const { email, nome, senha, avatar, idade, tipo, apelido } = req.body;

  if (!email || !nome || !senha || !tipo) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios.",
    });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    const novoUsuario = await prisma.usuario.create({
      data: {
        email: email,
        nome: nome,
        senha: senhaHash,
        avatar: avatar || "default.jpg",
        idade: idade || 0,
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

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res
      .status(400)
      .json({ message: "E-mail e senha são obrigatórias." });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { email: email },
    });

    if (!usuario) {
      return res.status(401).json({ message: "E-mail ou senha inválida." });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "E-mail ou senha inválida." });
    }

    res.status(200).json({
      message: "Login bem-sucedido!",
      userId: usuario.id,
      tipo: usuario.tipo,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.get("/usuarios/:tipo", async (req, res) => {
  const { tipo } = req.params;
  if (tipo !== "ALUNO" && tipo !== "PSICOLOGO") {
    return res.status(400).json({ message: "Tipo de usuário inválido." });
  }

  try {
    const usuarios = await prisma.usuario.findMany({
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

app.listen(PORT, () => {
  console.log(`Servidor CodeSandbox rodando`);
});
