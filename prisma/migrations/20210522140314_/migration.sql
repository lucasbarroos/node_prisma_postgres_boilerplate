/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Module` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Module.name_unique" ON "Module"("name");
