const express = require("express");
const cors = require("cors");
const path = require("path");
const rotasusuario = require("./controllers/usuario");
const rotalogin = require("./controllers/login");
const rotasChat = require("./controllers/chat");
const rotaUpload = require("./controllers/upload");
const server = express();

server.use("/uploads", express.static("uploads"));

server.use(cors());
server.use(express.json());
server.use(express.static("assets"));

server.use(rotasusuario);
server.use(rotaUpload);
server.use(rotalogin);
server.use(rotasChat);

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "interface.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "Login-interface.html"));
});

server.get("/cadastro", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "/cadastro.html"));
});
server.get("/doacoes", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "/doacoes.html"));
});
server.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "chat.html"));
});
server.get("/procurar_aluno", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "procurar_aluno.html"));
});
server.get("/procurar_psicologo", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "pages", "procurar_psicologo.html"));
});
server.listen(3002, () => console.log("Rodando na porta 3002"));
