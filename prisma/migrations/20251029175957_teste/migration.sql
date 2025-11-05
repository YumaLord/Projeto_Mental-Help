/*
  Warnings:

  - Added the required column `avatar` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "apelido" TEXT
);
INSERT INTO "new_Usuario" ("apelido", "email", "id", "idade", "nome", "senha") SELECT "apelido", "email", "id", "idade", "nome", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
