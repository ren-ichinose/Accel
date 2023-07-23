import getFinancialData from '@/utils/getFinancialData'
import { useWatch } from 'react-hook-form'
import TaxDetailsTable from '../taxDetailsTable/organisms/taxDetailsTable/taxDetailsTable'
import TotalAmountTable from '../totalAmountTable/totalAmountTable'
import styles from './financialSummary.module.css'

export default function FinancialSummary({ control }: { control: any }) {
  const watchProducts = useWatch({ control, name: 'invoiceProducts' })

  const { taxDetails10, taxDetails8, taxDetails0, totalAmount } =
    getFinancialData(watchProducts)

  return (
    <div className={styles.wrapper}>
      <div className={styles.taxDetailsTableContainer}>
        <TaxDetailsTable
          taxDetails10={taxDetails10}
          taxDetails8={taxDetails8}
          taxDetails0={taxDetails0}
        />
      </div>
      <div className={styles.totalAmountTableContainer}>
        <TotalAmountTable totalAmount={totalAmount} />
      </div>
    </div>
  )
}
