/*
  Warnings:

  - Added the required column `consulta_id` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chat_id` to the `Mensagem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_ConsultaToUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ConsultaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Consulta" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ConsultaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_do_chat" DATETIME NOT NULL,
    "hora_do_chat" DATETIME NOT NULL,
    "consulta_id" INTEGER NOT NULL,
    CONSTRAINT "Chat_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Chat" ("data_do_chat", "hora_do_chat", "id") SELECT "data_do_chat", "hora_do_chat", "id" FROM "Chat";
DROP TABLE "Chat";
ALTER TABLE "new_Chat" RENAME TO "Chat";
CREATE UNIQUE INDEX "Chat_consulta_id_key" ON "Chat"("consulta_id");
CREATE TABLE "new_Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caracteres" TEXT NOT NULL,
    "data_envio" DATETIME NOT NULL,
    "chat_id" INTEGER NOT NULL,
    CONSTRAINT "Mensagem_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Mensagem" ("caracteres", "data_envio", "id") SELECT "caracteres", "data_envio", "id" FROM "Mensagem";
DROP TABLE "Mensagem";
ALTER TABLE "new_Mensagem" RENAME TO "Mensagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_ConsultaToUsuario_AB_unique" ON "_ConsultaToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_ConsultaToUsuario_B_index" ON "_ConsultaToUsuario"("B");
