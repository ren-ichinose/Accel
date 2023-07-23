import { TotalAmount } from '@/interfaces/main.interface'
import formatToJPY from '@/utils/formatToJPY'
import styles from './totalAmountTable.module.css'

export default function TotalAmountTable({
  totalAmount,
}: {
  totalAmount: TotalAmount
}) {
  const { totalTaxExcludedPrice, totalTaxPrice, totalTaxIncludedPrice } =
    totalAmount

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.th}>小計</th>
          <td className={styles.td}>{formatToJPY(totalTaxExcludedPrice)}</td>
        </tr>
        <tr>
          <th className={styles.th}>消費税</th>
          <td className={styles.td}>{formatToJPY(totalTaxPrice)}</td>
        </tr>
        <tr>
          <th className={styles.th}>合計</th>
          <td className={styles.td}>{formatToJPY(totalTaxIncludedPrice)}</td>
        </tr>
      </tbody>
    </table>
  )
}
