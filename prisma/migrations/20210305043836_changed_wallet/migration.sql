/*
  Warnings:

  - You are about to drop the column `image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `wallets` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Common', 'Admin');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Salary', 'Transport', 'Emergency', 'Other');

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "isCredit" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "categories" "Category"[];

-- AlterTable
ALTER TABLE "users" DROP COLUMN "image",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'Common';

-- AlterTable
ALTER TABLE "wallets" DROP COLUMN "balance";
