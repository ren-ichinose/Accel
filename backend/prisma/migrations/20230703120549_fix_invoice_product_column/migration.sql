/*
  Warnings:

  - You are about to alter the column `price` on the `invoice_products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.

*/
-- AlterTable
ALTER TABLE "invoice_products" ALTER COLUMN "quantity" SET DATA TYPE BIGINT,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(12,2);
