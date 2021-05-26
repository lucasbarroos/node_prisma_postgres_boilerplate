/*
  Warnings:

  - You are about to drop the column `receive_admin_emails` on the `Role` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Role" DROP COLUMN "receive_admin_emails",
ADD COLUMN     "receiveAdminEmails" BOOLEAN,
ALTER COLUMN "permissions" DROP NOT NULL;
