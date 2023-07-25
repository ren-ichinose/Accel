import { Decimal } from '@prisma/client/runtime/library';

export interface InvoiceData {
  businessId: string;
  documentIssueDate?: Date | null;
  documentNumber?: string | null;
  customerName: string;
  customerTitle: string;
  businessDetails: string;
  mSealsId?: string | null;
  notes?: string | null;
}

export interface InvoiceProductData {
  itemOrder: number;
  transactionDate?: Date | null;
  productName: string;
  quantity?: number | null;
  unit?: string | null;
  price?: number | null;
  taxClassification: number;
  invoiceId: string;
}

export interface MSealResponse {
  id: string;
  name: string;
  imageUrl: string;
  selectFlag: number;
}

export interface InvoiceProductResponse {
  id: string;
  itemOrder: number;
  transactionDate?: Date | null;
  productName: string;
  quantity?: number | null;
  unit?: string | null;
  price?: Decimal | null;
  taxClassification: number;
}

export interface InvoiceResponse {
  id: string;
  businessId: string;
  documentIssueDate?: Date | null;
  documentNumber?: string | null;
  customerName: string;
  customerTitle: string;
  businessDetails: string;
  mSeals?: string | null;
  notes?: string | null;
  invoiceProducts: InvoiceProductResponse[];
}
