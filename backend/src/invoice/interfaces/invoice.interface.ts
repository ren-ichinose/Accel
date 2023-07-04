export interface InvoiceData {
  documentIssueDate: string;
  documentNumber: string;
  customerName: string;
  businessDetails: string;
  mSealsId?: string;
  notes: string;
  businessId: string;
}

export interface InvoiceProductData {
  itemOrder: number;
  transactionDate: string;
  productName: string;
  quantity: number;
  unit: string;
  price: number;
  taxClassification: number;
  invoiceId: string;
}
