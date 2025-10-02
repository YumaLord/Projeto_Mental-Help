/*
  Warnings:

  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Usuario";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "horario" DATETIME NOT NULL,
    "data" DATETIME NOT NULL,
    "flag" TEXT
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_do_chat" DATETIME NOT NULL,
    "hora_do_chat" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caracteres" TEXT NOT NULL,
    "data_envio" DATETIME NOT NULL
);
