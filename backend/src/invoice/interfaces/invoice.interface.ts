import { Decimal } from '@prisma/client/runtime/library';

export interface InvoiceData {
  businessId: string;
  documentIssueDate?: Date | null;
  documentNumber?: string | null;
  customerName: string;
  customerTitle: string;
  businessDetails?: string | null;
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
  transactionDate?: Date;
  productName: string;
  quantity?: number;
  unit?: string;
  price?: Decimal;
  taxClassification: number;
}

export interface InvoiceResponse {
  id: string;
  businessId: string;
  documentIssueDate: Date;
  documentNumber: string;
  customerName: string;
  customerTitle?: string;
  businessDetails: string;
  notes?: string;
  mSeals?: MSealResponse;
  invoiceProducts: InvoiceProductResponse[];
}
