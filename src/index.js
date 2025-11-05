const express = require("express");
const cors = require("cors");
const { rotasUsuario } = require("./controllers/usuario");
const { rotaLogin } = require("./controllers/login");
const server = express();

server.use(cors());
server.use(express.json());
server.use(rotasUsuario);
server.use(rotaLogin);
server.listen(3002, () => console.log("Rodando"));
