import type { TaxDetailsProps } from '@/interfaces/main.interface'
import TaxDetailsTableBody from '../../molecules/taxDetailsTableBody/taxDetailsTableBody'
import TaxDetailsTableHeader from '../../molecules/taxDetailsTableHeader/taxDetailsTableHeader'
import styles from './taxDetailsTable.module.css'

export default function TaxDetailsTable({
  taxDetails8,
  taxDetails10,
}: TaxDetailsProps) {
  return (
    <table className={styles.table}>
      <TaxDetailsTableHeader />
      <TaxDetailsTableBody
        taxDetails8={taxDetails8}
        taxDetails10={taxDetails10}
      />
    </table>
  )
}
