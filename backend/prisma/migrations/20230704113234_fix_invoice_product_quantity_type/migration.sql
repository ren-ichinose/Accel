/*
  Warnings:

  - You are about to alter the column `quantity` on the `invoice_products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "invoice_products" ALTER COLUMN "quantity" SET DATA TYPE INTEGER;
