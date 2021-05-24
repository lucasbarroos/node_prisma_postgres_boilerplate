/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "receive_admin_emails" BOOLEAN,
ADD COLUMN     "deleted" BOOLEAN;

-- CreateIndex
CREATE UNIQUE INDEX "Role.name_unique" ON "Role"("name");
