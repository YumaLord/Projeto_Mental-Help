const express = require("express");
const cors = require("cors");
const { rotasUsuario } = require("./controllers/usuario");
const { rotaLogin } = require("./controllers/login");
const { rotasChat } = require("./controllers/chat"); // <-- IMPORTAR NOVO ARQUIVO

const server = express();

server.use(cors());
server.use(express.json());
server.use(rotasUsuario);
server.use(rotaLogin);
server.use(rotasChat); // <-- ADICIONAR NOVA ROTA

server.listen(3002, () => console.log("Rodando"));
