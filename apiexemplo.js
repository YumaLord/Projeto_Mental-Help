const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/cadastro", async (req, res) => {
  const { email, nome, senha } = req.body;

  if (!email || !nome || !senha) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    // 1. Criptografar a senha (PROTEÇÃO ESSENCIAL!)
    const salt = await bcrypt.genSalt(10);
    const senhaHash = await bcrypt.hash(senha, salt);

    // 2. Salvar o novo usuário no banco de dados (Prisma)
    const novoUsuario = await prisma.usuario.create({
      data: {
        // **ATENÇÃO:** Mude 'matricula', 'avatar' e 'idade' se o seu schema for diferente.
        matricula: email,
        email: email,
        nome: nome,
        senha: senhaHash,
        avatar: "default.jpg",
        idade: 0,
      },
    });

    res.status(201).json({
      message: "Usuário criado com sucesso!",
      userId: novoUsuario.id,
    });
  } catch (error) {
    console.error("Erro no cadastro:", error);

    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ message: "E-mail ou Matrícula já cadastrada." });
    }
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.post("/login", async (req, res) => {
  const { matricula, senha } = req.body;

  if (!matricula || !senha) {
    return res
      .status(400)
      .json({ message: "Matrícula e senha são obrigatórias." });
  }

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { matricula: matricula },
    });

    if (!usuario) {
      return res.status(401).json({ message: "Matrícula ou senha inválida." });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Matrícula ou senha inválida." });
    }

    res.status(200).json({
      message: "Login bem-sucedido!",
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor CodeSandbox rodando`);
});
