export interface TaxDetails8 {
  taxExcludedPrice: number
  taxPrice: number
  taxIncludedPrice: number
}
export interface TaxDetails10 {
  taxExcludedPrice: number
  taxPrice: number
  taxIncludedPrice: number
}
export interface TaxDetailsProps {
  taxDetails8: TaxDetails8
  taxDetails10: TaxDetails10
}

// 小計（税抜合計）、消費税、合計（税込合計）の3つの金額
export interface TotalAmountTableProps {
  TotalTaxExcludedPrice: number
  TotalTaxPrice: number
  TotalTaxIncludedPrice: number
}
