import type {
  CreateInvoiceProduct,
  FinancialData,
  InvoiceProduct,
  TaxDetailsAll,
  TotalAmount,
} from '@/interfaces/main.interface'

const calculateTaxDetails = (
  productsData: CreateInvoiceProduct[]
): TaxDetailsAll => {
  const taxExcludedPrice10 = productsData.reduce((acc: number, cur) => {
    if (!cur.price || !cur.quantity) return acc
    if (Number(cur.taxClassification) === 2) {
      return acc + cur.price * cur.quantity
    }
    return acc
  }, 0)

  const taxPrice10 = productsData?.reduce((acc: number, cur) => {
    if (!cur.price || !cur.quantity) return acc
    if (Number(cur.taxClassification) === 2) {
      return acc + cur.price * cur.quantity * 0.1
    }
    return acc
  }, 0)

  const taxExcludedPrice8 = productsData?.reduce((acc: number, cur) => {
    if (!cur.price || !cur.quantity) return acc
    if (Number(cur.taxClassification) === 1) {
      return acc + cur.price * cur.quantity
    }
    return acc
  }, 0)

  const taxPrice8 = productsData?.reduce((acc: number, cur) => {
    if (!cur.price || !cur.quantity) return acc
    if (Number(cur.taxClassification) === 1) {
      return acc + cur.price * cur.quantity * 0.08
    }
    return acc
  }, 0)

  const taxExcludedPrice0 = productsData?.reduce((acc: number, cur) => {
    if (!cur.price || !cur.quantity) return acc
    if (Number(cur.taxClassification) === 0) {
      return acc + cur.price * cur.quantity
    }
    return acc
  }, 0)

  const taxDetails = {
    taxDetails10: {
      taxExcludedPrice: taxExcludedPrice10,
      taxPrice: taxPrice10,
      taxIncludedPrice: taxExcludedPrice10 + taxPrice10,
    },
    taxDetails8: {
      taxExcludedPrice: taxExcludedPrice8,
      taxPrice: taxPrice8,
      taxIncludedPrice: taxExcludedPrice8 + taxPrice8,
    },
    taxDetails0: {
      taxExcludedPrice: taxExcludedPrice0,
      taxPrice: 0,
      taxIncludedPrice: taxExcludedPrice0,
    },
  }

  return taxDetails
}

const calculateTotalAmount = (
  productsData: CreateInvoiceProduct[] | InvoiceProduct[]
): TotalAmount => {
  const taxDetails = calculateTaxDetails(productsData)
  const totalAmount = {
    totalTaxExcludedPrice:
      taxDetails.taxDetails10.taxExcludedPrice +
      taxDetails.taxDetails8.taxExcludedPrice +
      taxDetails.taxDetails0.taxExcludedPrice,
    totalTaxPrice:
      taxDetails.taxDetails10.taxPrice + taxDetails.taxDetails8.taxPrice,
    totalTaxIncludedPrice:
      taxDetails.taxDetails10.taxIncludedPrice +
      taxDetails.taxDetails8.taxIncludedPrice +
      taxDetails.taxDetails0.taxIncludedPrice,
  }
  return totalAmount
}

export default function getFinancialData(
  productsData: CreateInvoiceProduct[] | InvoiceProduct[]
): FinancialData {
  if (!productsData) {
    const financialDataZero = {
      taxDetails10: {
        taxExcludedPrice: 0,
        taxPrice: 0,
        taxIncludedPrice: 0,
      },
      taxDetails8: {
        taxExcludedPrice: 0,
        taxPrice: 0,
        taxIncludedPrice: 0,
      },
      taxDetails0: {
        taxExcludedPrice: 0,
        taxPrice: 0,
        taxIncludedPrice: 0,
      },
      totalAmount: {
        totalTaxExcludedPrice: 0,
        totalTaxPrice: 0,
        totalTaxIncludedPrice: 0,
      },
    }
    return financialDataZero
  }

  const taxDetails = calculateTaxDetails(productsData)
  const totalAmount = calculateTotalAmount(productsData)
  const financialData = { ...taxDetails, totalAmount }

  return financialData
}
