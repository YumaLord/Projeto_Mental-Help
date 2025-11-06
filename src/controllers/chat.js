const { Router } = require("express");
const { db } = require("../db");
// const { autenticarToken } = require('../middlewares/autenticarToken'); // Se você tiver o middleware de autenticação
const rotasChat = Router();

// ==========================================================
// ROTA 1: POST /chat/mensagem
// Salva uma nova mensagem no banco de dados.
// Requer: remetenteId, destinatarioId, conteudo
// ==========================================================
// rotasChat.post("/chat/mensagem", autenticarToken, async (req, res) => {
rotasChat.post("/chat/mensagem", async (req, res) => {
  // Removida a autenticação por enquanto
  const { remetenteId, destinatarioId, conteudo } = req.body;

  if (!remetenteId || !destinatarioId || !conteudo) {
    return res
      .status(400)
      .json({ message: "Dados incompletos para enviar a mensagem." });
  }

  try {
    // CRÍTICO: Encontrar ou criar o chat entre os dois usuários
    // A ordem (A-B ou B-A) não importa para o Prisma encontrar o chat.
    let chat = await db.chat.findFirst({
      where: {
        OR: [
          { usuario1Id: remetenteId, usuario2Id: destinatarioId },
          { usuario1Id: destinatarioId, usuario2Id: remetenteId },
        ],
      },
    });

    // Se o chat não existir, criamos um novo
    if (!chat) {
      chat = await db.chat.create({
        data: {
          usuario1Id: remetenteId,
          usuario2Id: destinatarioId,
        },
      });
    }
    const novaMensagem = await db.mensagem.create({
      data: {
        conteudo,
        remetenteId,
        chatId: chat.id,
      },
    });

    res.status(201).json(novaMensagem);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    res.status(500).json({ message: "Erro interno ao salvar a mensagem." });
  }
});

// ==========================================================
// ROTA 2: GET /chat/:remetenteId/:destinatarioId
// Carrega o histórico de mensagens entre dois usuários.
// ==========================================================
// rotasChat.get("/chat/:remetenteId/:destinatarioId", autenticarToken, async (req, res) => {
rotasChat.get("/chat/:remetenteId/:destinatarioId", async (req, res) => {
  // Removida a autenticação por enquanto
  const remetenteId = parseInt(req.params.remetenteId);
  const destinatarioId = parseInt(req.params.destinatarioId);

  try {
    // Encontra o chat existente
    const chat = await db.chat.findFirst({
      where: {
        OR: [
          { usuario1Id: remetenteId, usuario2Id: destinatarioId },
          { usuario1Id: destinatarioId, usuario2Id: remetenteId },
        ],
      },
      include: {
        mensagens: {
          orderBy: {
            dataEnvio: "asc",
          },
        },
      },
    });

    if (!chat) {
      return res.json([]);
    }

    res.json(chat.mensagens);
  } catch (error) {
    console.error("Erro ao carregar histórico:", error);
    res
      .status(500)
      .json({ message: "Erro interno ao carregar o histórico de mensagens." });
  }
});

module.exports = { rotasChat };
