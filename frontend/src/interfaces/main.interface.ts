export interface User {
  loginId: string
  password: string
}

export interface Business {
  id: string
  businessName: string
}

export interface BussinesAuth {
  businessName: string
}

export interface TaxDetails {
  taxExcludedPrice: number
  taxPrice: number
  taxIncludedPrice: number
}

export interface TaxDetailsAll {
  taxDetails10: TaxDetails
  taxDetails8: TaxDetails
  taxDetails0: TaxDetails
}

export interface TotalAmount {
  totalTaxExcludedPrice: number
  totalTaxPrice: number
  totalTaxIncludedPrice: number
}

export interface FinancialData {
  taxDetails10: TaxDetails
  taxDetails8: TaxDetails
  taxDetails0: TaxDetails
  totalAmount: TotalAmount
}

export interface InvoiceProduct {
  id: string
  itemOrder: number
  transactionDate?: Date | null
  productName: string
  quantity?: number | null
  unit?: string | null
  price?: number | null
  taxClassification: number
}

export interface Invoice {
  id: string
  businessId: string
  documentIssueDate?: Date | null
  documentNumber?: string | null
  customerName: string
  customerTitle: string
  businessDetails: string
  mSeals?: string | null
  notes?: string | null
  invoiceProducts: InvoiceProduct[]
}

export interface CreateInvoiceProduct {
  transactionDate?: Date | null
  productName?: string | null
  quantity?: number | null
  unit?: string | null
  price?: number | null
  taxClassification: number
}

export interface CreateInvoice {
  documentIssueDate?: Date | null
  documentNumber?: string | null
  customerName: string
  customerTitle: string
  businessDetails: string
  mSealsId?: string | null
  notes?: string | null
  invoiceProducts: CreateInvoiceProduct[]
}

export interface MBusinessDetails {
  id: string
  businessId: string
  name: string
  businessDetail: string
  selectFlag: number
}
