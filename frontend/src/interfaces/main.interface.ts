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

export interface TaxDetails8 {
  taxExcludedPrice: string
  taxPrice: string
  taxIncludedPrice: string
}
export interface TaxDetails10 {
  taxExcludedPrice: string
  taxPrice: string
  taxIncludedPrice: string
}
export interface TaxDetailsProps {
  taxDetails8: TaxDetails8
  taxDetails10: TaxDetails10
}

export interface TotalAmountTableProps {
  totalTaxExcludedPrice: string
  totalTaxPrice: string
  totalTaxIncludedPrice: string
}

export interface IProduct {
  itemOrder: string
  transactionDate?: Date | null
  productName?: string | null
  quantity?: number | null
  unit?: string | null
  price?: number | null
  taxClassification: number
}

export interface IInvoice {
  documentIssueDate: Date
  documentNumber: string
  customerName: string
  customerTitle: string
  businessDetails: string
  mSealsId?: string | null
  notes?: string | null
  invoiceProducts: IProduct[]
}
