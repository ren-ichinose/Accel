import formatToJPY from '@/utils/formatToJPY'
import { useWatch } from 'react-hook-form'
import TaxDetailsTable from '../taxDetailsTable/organisms/taxDetailsTable/taxDetailsTable'
import TotalAmountTable from '../totalAmountTable/totalAmountTable'
import styles from './financialSummary.module.css'

export default function FinancialSummary({ control }: { control: any }) {
  const watchProducts = useWatch({ control, name: 'invoiceProducts' })

  const taxExcludedPrice10 = watchProducts?.reduce((acc: number, cur: any) => {
    if (cur.taxClassification === '2') {
      return acc + cur.price * cur.quantity
    }
    return acc
  }, 0)

  const taxPrice10 = watchProducts?.reduce((acc: number, cur: any) => {
    if (cur.taxClassification === '2') {
      return acc + cur.price * cur.quantity * 0.1
    }
    return acc
  }, 0)

  const taxExcludedPrice8 = watchProducts?.reduce((acc: number, cur: any) => {
    if (cur.taxClassification === '1') {
      return acc + cur.price * cur.quantity
    }
    return acc
  }, 0)

  const taxPrice8 = watchProducts?.reduce((acc: number, cur: any) => {
    if (cur.taxClassification === '1') {
      return acc + cur.price * cur.quantity * 0.08
    }
    return acc
  }, 0)

  const taxDetails10 = {
    taxExcludedPrice: formatToJPY(taxExcludedPrice10),
    taxPrice: formatToJPY(taxPrice10),
    taxIncludedPrice: formatToJPY(taxExcludedPrice10 + taxPrice10),
  }

  const taxDetails8 = {
    taxExcludedPrice: formatToJPY(taxExcludedPrice8),
    taxPrice: formatToJPY(taxPrice8),
    taxIncludedPrice: formatToJPY(taxExcludedPrice8 + taxPrice8),
  }

  const totalAmount = {
    totalTaxExcludedPrice: formatToJPY(taxExcludedPrice10 + taxExcludedPrice8),
    totalTaxPrice: formatToJPY(taxPrice10 + taxPrice8),
    totalTaxIncludedPrice: formatToJPY(
      taxExcludedPrice10 + taxExcludedPrice8 + taxPrice10 + taxPrice8
    ),
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.taxDetailsTableContainer}>
        <TaxDetailsTable
          taxDetails10={taxDetails10}
          taxDetails8={taxDetails8}
        />
      </div>
      <div className={styles.totalAmountTableContainer}>
        <TotalAmountTable totalAmount={totalAmount} />
      </div>
    </div>
  )
}
