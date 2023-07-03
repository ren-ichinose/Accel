-- CreateTable
CREATE TABLE "invoices" (
    "id" VARCHAR(36) NOT NULL,
    "businessId" VARCHAR(36) NOT NULL,
    "documentIssueDate" TIMESTAMP(3) NOT NULL,
    "documentNumber" VARCHAR(50) NOT NULL,
    "customerName" VARCHAR(255) NOT NULL,
    "businessDetails" VARCHAR(510) NOT NULL,
    "mSealsId" VARCHAR(36),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_products" (
    "id" VARCHAR(36) NOT NULL,
    "invoiceId" VARCHAR(36) NOT NULL,
    "itemOrder" INTEGER NOT NULL,
    "transactionDate" TIMESTAMP(3),
    "productName" VARCHAR(255) NOT NULL,
    "quantity" INTEGER,
    "unit" VARCHAR(20),
    "price" DECIMAL(65,30),
    "taxClassification" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "invoice_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "m_seals" (
    "id" VARCHAR(36) NOT NULL,
    "businessId" VARCHAR(36) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "selectFlag" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "m_seals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "businesses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_mSealsId_fkey" FOREIGN KEY ("mSealsId") REFERENCES "m_seals"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoice_products" ADD CONSTRAINT "invoice_products_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "m_seals" ADD CONSTRAINT "m_seals_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "businesses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
