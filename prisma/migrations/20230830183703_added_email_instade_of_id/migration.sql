-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_authorId_fkey";

-- DropForeignKey
ALTER TABLE "SavedLinks" DROP CONSTRAINT "SavedLinks_authorId_fkey";

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavedLinks" ADD CONSTRAINT "SavedLinks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
