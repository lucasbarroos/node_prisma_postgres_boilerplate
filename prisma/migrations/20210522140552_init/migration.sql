-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "settingsAccess" BOOLEAN DEFAULT false,
ADD COLUMN     "allCustomersAccess" BOOLEAN DEFAULT false;
