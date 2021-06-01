/*
  Warnings:

  - You are about to drop the column `cpnj` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Company.cpnj_unique";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "cpnj",
ADD COLUMN     "cnpj" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Company.cnpj_unique" ON "Company"("cnpj");
