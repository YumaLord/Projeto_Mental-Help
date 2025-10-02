const express = require("express");
const { PrismaClient } = require("./generated/prisma");
const { rotasUsuario } = require("./controllers/usuario");

const server = express();
const db = new PrismaClient();
server.use(express.json());
server.use(rotasUsuario);

server.get("/usuarios", async (req, res) => {
  const usuarios = db.usuario.findMany();
  res.json(usuarios);
});

server.post("/usuarios", async (req, res) => {
  const { nome, avatar, idade, email, senha, apelido } = req.body;

  await db.usuario.create({
    data: {
      nome,
      avatar,
      idade,
      email,
      senha,
      apelido,
    },
  });
  res.json({ sucesso: "ok" });
});

server.delete("/usuarios/:id", async (req, res) => {
  await db.usuario.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ sucesso: "ok" });
});

server.listen(3000, () => console.log("Rodando"));
