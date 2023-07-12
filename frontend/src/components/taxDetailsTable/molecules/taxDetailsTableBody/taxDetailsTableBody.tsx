import { TaxDetailsProps } from '@/interfaces/main.interface'
import styles from './taxDetailsTableBody.module.css'

export default function TaxDetailsTableBody({
  taxDetails8,
  taxDetails10,
}: TaxDetailsProps) {
  const {
    taxExcludedPrice: taxExcludedPrice8,
    taxPrice: taxPrice8,
    taxIncludedPrice: taxIncludedPrice8,
  } = taxDetails8
  const {
    taxExcludedPrice: taxExcludedPrice10,
    taxPrice: taxPrice10,
    taxIncludedPrice: taxIncludedPrice10,
  } = taxDetails10

  return (
    <tbody className={styles.tbody}>
      <tr>
        <th className={styles.rowHeader}>10% 対象</th>
        <td>{taxExcludedPrice10}</td>
        <td>{taxPrice10}</td>
        <td>{taxIncludedPrice10}</td>
      </tr>
      {taxExcludedPrice8 && (
        <tr>
          <th className={styles.rowHeader}>軽減 8% 対象</th>
          <td>{taxExcludedPrice8}</td>
          <td>{taxPrice8}</td>
          <td>{taxIncludedPrice8}</td>
        </tr>
      )}
    </tbody>
  )
}
