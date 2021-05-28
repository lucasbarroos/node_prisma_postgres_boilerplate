-- CreateTable
CREATE TABLE "Company" (
    "active" BOOLEAN NOT NULL DEFAULT true,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpnj" TEXT NOT NULL,
    "document" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "number" TEXT,
    "metadata" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Company.name_unique" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Company.cpnj_unique" ON "Company"("cpnj");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToUser_AB_unique" ON "_CompanyToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToUser_B_index" ON "_CompanyToUser"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToUser" ADD FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
