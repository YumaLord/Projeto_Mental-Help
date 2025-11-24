const express = require("express");
const cors = require("cors");

const rotasusuario = require("./controllers/usuario");
const rotalogin = require("./controllers/login");
const rotasChat = require("./controllers/chat");
const rotaUpload = require("./controllers/upload");
const server = express();

server.use("/uploads", express.static("uploads"));

server.use(cors());
server.use(express.json());

server.use(rotasusuario);
server.use(rotaUpload);
server.use(rotalogin);
server.use(rotasChat);

server.listen(3002, () => console.log("Rodando na porta 3002"));
