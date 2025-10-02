const { Router } = require("express");
const rotasUsuario = Router();

rotasUsuario.get("/usuarios", async (req, res) => {
  const usuarios = db.usuario.findMany();
  res.json(usuarios);
});

rotasUsuario.post("/usuarios", async (req, res) => {
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

rotasUsuario.rotasUsuario.delete("/usuarios/:id", async (req, res) => {
  await db.usuario.delete({
    where: { id: Number(req.params.id) },
  });
  res.json({ sucesso: "ok" });
});

rotasUsuario.listen(3000, () => console.log("Rodando"));

module.exports = { rotasUsuario };
