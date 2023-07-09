import TaxDetailsTable from '../taxDetailsTable/organisms/taxDetailsTable/taxDetailsTable'
import TotalAmountTable from '../totalAmountTable/totalAmountTable'
import styles from './financialSummary.module.css'

const taxDetails8 = {
  taxExcludedPrice: 3000000,
  taxPrice: 240000,
  taxIncludedPrice: 3240000,
}

const taxDetails10 = {
  taxExcludedPrice: 7000000,
  taxPrice: 700000,
  taxIncludedPrice: 7700000,
}

const totalAmount = {
  totalTaxExcludedPrice: 10000000,
  totalTaxPrice: 940000,
  totalTaxIncludedPrice: 10940000,
}

export default function FinancialSummary() {
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
