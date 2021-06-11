/*
  Warnings:

  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - Added the required column `rolesId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId",
ADD COLUMN     "rolesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("rolesId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;
