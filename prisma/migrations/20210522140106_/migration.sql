/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `Module` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `Module` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Module.name_unique";

-- AlterTable
ALTER TABLE "Module" ADD COLUMN     "key" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Module.key_unique" ON "Module"("key");
