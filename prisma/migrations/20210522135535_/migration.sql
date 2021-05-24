/*
  Warnings:

  - You are about to drop the column `permissionId` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `permissions` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_permissionId_fkey";

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "permissionId",
ADD COLUMN     "permissions" JSONB NOT NULL;

-- DropTable
DROP TABLE "Permission";

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Module.name_unique" ON "Module"("name");
