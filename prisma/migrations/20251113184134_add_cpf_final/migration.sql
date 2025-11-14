-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "avatar" TEXT,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "apelido" TEXT,
    "tipo" TEXT NOT NULL DEFAULT 'ALUNO'
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario1Id" INTEGER NOT NULL,
    "usuario2Id" INTEGER NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chat_usuario1Id_fkey" FOREIGN KEY ("usuario1Id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chat_usuario2Id_fkey" FOREIGN KEY ("usuario2Id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "dataEnvio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" TEXT NOT NULL DEFAULT 'TEXTO',
    "remetenteId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    CONSTRAINT "Mensagem_remetenteId_fkey" FOREIGN KEY ("remetenteId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mensagem_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horario" DATETIME NOT NULL,
    "data" DATETIME NOT NULL,
    "flag" TEXT
);

-- CreateTable
CREATE TABLE "_ConsultaToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ConsultaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Consulta" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ConsultaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Chat_usuario1Id_usuario2Id_key" ON "Chat"("usuario1Id", "usuario2Id");

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultaToUsuario_AB_unique" ON "_ConsultaToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultaToUsuario_B_index" ON "_ConsultaToUsuario"("B");
