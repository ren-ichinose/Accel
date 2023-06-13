/*
  Warnings:

  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[loginId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `loginId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId",
ADD COLUMN     "loginId" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_loginId_key" ON "User"("loginId");
