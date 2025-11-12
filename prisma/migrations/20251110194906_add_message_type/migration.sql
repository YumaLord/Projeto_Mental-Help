-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "conteudo" TEXT NOT NULL,
    "dataEnvio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" TEXT NOT NULL DEFAULT 'TEXTO',
    "remetenteId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    CONSTRAINT "Mensagem_remetenteId_fkey" FOREIGN KEY ("remetenteId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Mensagem_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Mensagem" ("chatId", "conteudo", "dataEnvio", "id", "remetenteId") SELECT "chatId", "conteudo", "dataEnvio", "id", "remetenteId" FROM "Mensagem";
DROP TABLE "Mensagem";
ALTER TABLE "new_Mensagem" RENAME TO "Mensagem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
