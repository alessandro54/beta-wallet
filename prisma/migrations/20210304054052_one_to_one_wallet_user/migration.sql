/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[ownerId]` on the table `wallet`. If there are existing duplicate values, the migration will fail.
  - Added the required column `ownerId` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wallets" ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "wallets_ownerId_unique" ON "wallets"("ownerId");

-- AddForeignKey
ALTER TABLE "wallets" ADD FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
