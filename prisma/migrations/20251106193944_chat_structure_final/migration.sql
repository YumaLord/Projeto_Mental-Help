/*
  Warnings:

  - You are about to drop the column `consulta_id` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `data_do_chat` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `hora_do_chat` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the column `caracteres` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `chat_id` on the `Mensagem` table. All the data in the column will be lost.
  - You are about to drop the column `data_envio` on the `Mensagem` table. All the data in the column will be lost.
  - Added the required column `usuario1Id` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario2Id` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chatId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conteudo` to the `Mensagem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remetenteId` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuario1Id" INTEGER NOT NULL,
    "usuario2Id" INTEGER NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chat_usuario1Id_fkey" FOREIGN KEY ("usuario1Id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Chat_usuario2Id_fkey" FOREIGN KEY ("usuario2Id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chat" ("id") SELECT "id" FROM "Chat";
DROP TABLE "Chat";
ALTER TABLE "new_Chat" RENAME TO "Chat";
CREATE UNIQUE INDEX "Chat_usuario1Id_usuario2Id_key" ON "Chat"("usuario1Id", "usuario2Id");
CREATE TABLE "new_Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "dataEnvio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "remetenteId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    CONSTRAINT "Mensagem_remetenteId_fkey" FOREIGN KEY ("remetenteId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mensagem_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Mensagem" ("id") SELECT "id" FROM "Mensagem";
DROP TABLE "Mensagem";
ALTER TABLE "new_Mensagem" RENAME TO "Mensagem";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "avatar" TEXT,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "apelido" TEXT,
    "tipo" TEXT NOT NULL DEFAULT 'ALUNO'
);
INSERT INTO "new_Usuario" ("apelido", "avatar", "email", "id", "idade", "nome", "senha", "tipo") SELECT "apelido", "avatar", "email", "id", "idade", "nome", "senha", "tipo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
