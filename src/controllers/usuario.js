const { Router } = require("express");
const { db } = require("../db");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const rotasUsuario = Router();

// --- CONFIGURAÇÃO MULTER COM CAMINHO ABSOLUTO E CRIAÇÃO FORÇADA ---
const UPLOAD_DIR = path.join(process.cwd(), "uploads");

if (!fs.existsSync(UPLOAD_DIR)) {
  console.log(`Diretório ${UPLOAD_DIR} não encontrado. Criando...`);
  try {
    fs.mkdirSync(UPLOAD_DIR);
    console.log("Diretório 'uploads' criado com sucesso.");
  } catch (err) {
    console.error("ERRO CRÍTICO AO CRIAR DIRETÓRIO DE UPLOAD:", err.message);
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR);
  },
  filename: (req, file, cb) => {
    const userId = req.params.userId || req.body.userId;
    const extension = file.mimetype.split("/")[1];

    cb(null, `avatar-${userId}-${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// --- 1. ROTA DE UPLOAD DE AVATAR (JÁ CORRIGIDA) ---
rotasUsuario.post(
  "/avatar/:userId",
  (req, res, next) => {
    upload.single("arquivo")(req, res, function (err) {
      if (err) {
        console.error(
          "-------------------------------------------------------------------"
        );
        console.error("ERRO CRÍTICO NO UPLOAD (MULTER):", err.message);
        console.error(
          "-------------------------------------------------------------------"
        );

        if (err instanceof multer.MulterError) {
          return res.status(400).json({ error: "Erro no Multer: " + err.code });
        }
        return res
          .status(500)
          .json({
            error: "Erro interno ao salvar o arquivo.",
            details: err.message,
          });
      }
      if (req.file) {
        req.file.path = path.join("uploads", path.basename(req.file.path));
      }
      next();
    });
  },
  async (req, res) => {
    const userId = Number(req.params.userId);

    if (!req.file) {
      console.error("Arquivo ausente.");
      return res
        .status(400)
        .json({
          error: "Nenhum arquivo enviado ou falha desconhecida no upload.",
        });
    }
    const filePath = req.file.path;

    try {
      const usuarioAtualizado = await db.usuario.update({
        where: { id: userId },
        data: {
          avatar: filePath,
        },
      });

      res.status(200).json({
        message: "Avatar atualizado com sucesso!",
        newAvatarPath: filePath,
      });
    } catch (dbError) {
      console.error(
        "-------------------------------------------------------------------"
      );
      console.error("ERRO NO PRISMA (DB):", dbError.message);
      res.status(500).json({
        error: "Erro ao atualizar o banco de dados.",
        details: dbError.message,
      });
    }
  }
);

// --- 2. NOVA ROTA PARA BUSCAR PERFIL INDIVIDUAL (PARA O CHAT) ---
rotasUsuario.get("/perfil/:id", async (req, res) => {
  const userId = Number(req.params.id);

  try {
    const usuario = await db.usuario.findUnique({
      where: { id: userId },
      select: {
        nome: true,
        avatar: true,
        apelido: true,
      },
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res.status(500).json({ message: "Erro interno ao buscar perfil." });
  }
});

// --- OUTRAS ROTAS (LISTAGEM DE USUÁRIOS) ---
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

module.exports = rotasUsuario;
