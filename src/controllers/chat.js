const { Router } = require("express");
const { db } = require("../db");
// const { autenticarToken } = require('../middlewares/autenticarToken');
const rotasChat = Router();
rotasChat.post("/chat/mensagem", async (req, res) => {
  // Converte IDs pra inteiro
  const remetenteId = parseInt(req.body.remetenteId);
  const destinatarioId = parseInt(req.body.destinatarioId);
  const { conteudo } = req.body;

  if (isNaN(remetenteId) || isNaN(destinatarioId) || !conteudo) {
    return res
      .status(400)
      .json({ message: "Dados incompletos ou IDs inválidos." });
  }

  try {
    // IDs
    const userA = Math.min(remetenteId, destinatarioId);
    const userB = Math.max(remetenteId, destinatarioId);

    let chat = await db.chat.findFirst({
      where: {
        OR: [
          { usuario1Id: userA, usuario2Id: userB },
          { usuario1Id: userB, usuario2Id: userA },
        ],
      },
    });

    if (!chat) {
      chat = await db.chat.create({
        data: {
          // Cria chat ordem userA, userB
          usuario1Id: userA,
          usuario2Id: userB,
        },
      });
    }

    const novaMensagem = await db.mensagem.create({
      data: {
        conteudo,
        remetenteId,
        chatId: chat.id,
        dataEnvio: new Date(),
      },
    });

    res.status(201).json({
      ...novaMensagem,
      dataEnvio: novaMensagem.dataEnvio.toISOString(),
    });
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    res.status(500).json({ message: "Erro interno ao salvar a mensagem." });
  }
});

rotasChat.get("/chat/:remetenteId/:destinatarioId", async (req, res) => {
  const remetenteId = parseInt(req.params.remetenteId);
  const destinatarioId = parseInt(req.params.destinatarioId);

  try {
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
          select: {
            id: true,
            conteudo: true,
            remetenteId: true,
            dataEnvio: true,
          },
        },
      },
    });

    if (!chat) {
      return res.json([]);
    }

    const mensagensFormatadas = chat.mensagens.map((m) => ({
      ...m,
      dataEnvio: m.dataEnvio.toISOString(),
    }));

    res.json(mensagensFormatadas);
  } catch (error) {
    console.error("Erro ao carregar histórico:", error);
    res
      .status(500)
      .json({ message: "Erro interno ao carregar o histórico de mensagens." });
  }
});

module.exports = rotasChat;
