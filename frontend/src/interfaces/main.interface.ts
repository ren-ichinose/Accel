export interface User {
  loginId: string
  password: string
}

export interface Business {
  id: number
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

// 小計（税抜合計）、消費税、合計（税込合計）の3つの金額
export interface TotalAmountTableProps {
  totalTaxExcludedPrice: string
  totalTaxPrice: string
  totalTaxIncludedPrice: string
}
