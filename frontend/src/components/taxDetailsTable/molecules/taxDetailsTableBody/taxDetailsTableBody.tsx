import { TaxDetailsAll } from '@/interfaces/main.interface'
import formatToJPY from '@/utils/formatToJPY'
import styles from './taxDetailsTableBody.module.css'

export default function TaxDetailsTableBody({
  taxDetails10,
  taxDetails8,
  taxDetails0,
}: TaxDetailsAll) {
  const {
    taxExcludedPrice: taxExcludedPrice10,
    taxPrice: taxPrice10,
    taxIncludedPrice: taxIncludedPrice10,
  } = taxDetails10

  const {
    taxExcludedPrice: taxExcludedPrice8,
    taxPrice: taxPrice8,
    taxIncludedPrice: taxIncludedPrice8,
  } = taxDetails8

  const {
    taxExcludedPrice: taxExcludedPrice0,
    taxIncludedPrice: taxIncludedPrice0,
  } = taxDetails0

  return (
    <tbody className={styles.tbody}>
      <tr>
        <th className={styles.rowHeader}>10% 対象</th>
        <td>{formatToJPY(taxExcludedPrice10)}</td>
        <td>{formatToJPY(taxPrice10)}</td>
        <td>{formatToJPY(taxIncludedPrice10)}</td>
      </tr>
      {taxExcludedPrice8 > 0 && (
        <tr>
          <th className={styles.rowHeader}>軽減 8% 対象</th>
          <td>{formatToJPY(taxExcludedPrice8)}</td>
          <td>{formatToJPY(taxPrice8)}</td>
          <td>{formatToJPY(taxIncludedPrice8)}</td>
        </tr>
      )}
      {taxExcludedPrice0 > 0 && (
        <tr>
          <th className={styles.rowHeader}>非課税</th>
          <td>{formatToJPY(taxExcludedPrice0)}</td>
          <td>¥0</td>
          <td>{formatToJPY(taxIncludedPrice0)}</td>
        </tr>
      )}
    </tbody>
  )
}
