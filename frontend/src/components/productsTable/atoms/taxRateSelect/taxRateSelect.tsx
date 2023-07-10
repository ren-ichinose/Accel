import styles from './taxRateSelect.module.css'

export default function TaxRateSelect() {
  return (
    <td className={styles.container}>
      <select className={styles.select}>
        <option value="2">10%</option>
        <option value="1">軽減8%</option>
        <option value="0">対象外</option>
      </select>
    </td>
  )
}
