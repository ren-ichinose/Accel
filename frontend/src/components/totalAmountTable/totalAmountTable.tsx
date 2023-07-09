import type { TotalAmountTableProps } from '@/interfaces/main.interface'
import styles from './totalAmountTable.module.css'

export default function TotalAmountTable({
  totalAmount,
}: {
  totalAmount: TotalAmountTableProps
}) {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.th}>小計</th>
          <td className={styles.td}>{totalAmount.TotalTaxExcludedPrice}</td>
        </tr>
        <tr>
          <th className={styles.th}>消費税</th>
          <td className={styles.td}>{totalAmount.TotalTaxPrice}</td>
        </tr>
        <tr>
          <th className={styles.th}>合計</th>
          <td className={styles.td}>{totalAmount.TotalTaxIncludedPrice}</td>
        </tr>
      </tbody>
    </table>
  )
}
