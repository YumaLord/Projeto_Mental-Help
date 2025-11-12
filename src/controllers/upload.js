const { Router } = require("express");
const multer = require("multer");
const path = require("path");
const { db } = require("../db");
const { autenticarToken } = require("../middlewares/autenticarToken");

const rotaUpload = Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const userId = (req.user && req.user.id) || "unknown";
    const ext = path.extname(file.originalname);

    cb(null, `${userId}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

rotaUpload.post(
  "/chat/upload",
  autenticarToken,
  upload.single("arquivo"),
  async (req, res) => {
    const arquivo = req.file;
    const { destinatarioId, tipo } = req.body;

    if (!arquivo || !destinatarioId || !tipo || !req.user.id) {
      return res
        .status(400)
        .json({ message: "Dados incompletos ou arquivo ausente." });
    }

    try {
      const remetenteId = req.user.id;
      const userA = Math.min(remetenteId, Number(destinatarioId));
      const userB = Math.max(remetenteId, Number(destinatarioId));

      let chat = await db.chat.findFirst({
        where: { usuario1Id: userA, usuario2Id: userB },
      });

      if (!chat) {
        chat = await db.chat.create({
          data: { usuario1Id: userA, usuario2Id: userB },
        });
      }

      const caminhoArquivo = arquivo.path;

      const novaMensagem = await db.mensagem.create({
        data: {
          conteudo: caminhoArquivo,
          remetenteId,
          chatId: chat.id,
          tipo: tipo,
          dataEnvio: new Date(),
        },
      });

      res.status(201).json({
        ...novaMensagem,
        dataEnvio: novaMensagem.dataEnvio.toISOString(),
      });
    } catch (error) {
      console.error("Erro no upload de arquivo:", error);
      res.status(500).json({ message: "Erro interno ao processar o upload." });
    }
  }
);

rotaUpload.post(
  "/usuario/avatar",
  autenticarToken,
  upload.single("avatar"),
  async (req, res) => {
    const arquivo = req.file;
    const userId = req.user.id;

    if (!arquivo) {
      return res.status(400).json({ message: "Arquivo de avatar ausente." });
    }

    try {
      const caminhoArquivo = arquivo.path;

      await db.usuario.update({
        where: { id: userId },
        data: { avatar: caminhoArquivo },
      });

      res.status(200).json({
        message: "Avatar atualizado com sucesso.",
        novoAvatarUrl: `${caminhoArquivo}`,
      });
    } catch (error) {
      console.error("Erro ao atualizar avatar:", error);
      res.status(500).json({ message: "Erro interno ao atualizar o avatar." });
    }
  }
);

module.exports = rotaUpload;
