/*
  Warnings:

  - You are about to drop the `_LinkToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_LinkToUser" DROP CONSTRAINT "_LinkToUser_B_fkey";

-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "_LinkToUser";

-- CreateTable
CREATE TABLE "SavedLinks" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "linkId" INTEGER,

    CONSTRAINT "SavedLinks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedLinks" ADD CONSTRAINT "SavedLinks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedLinks" ADD CONSTRAINT "SavedLinks_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE SET NULL ON UPDATE CASCADE;
