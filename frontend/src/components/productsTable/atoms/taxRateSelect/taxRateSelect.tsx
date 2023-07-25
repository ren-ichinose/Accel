import { UseFormRegister } from 'react-hook-form'
import styles from './taxRateSelect.module.css'

export default function TaxRateSelect({
  itemOrder,
  register,
}: TaxRateSelectProps) {
  return (
    <td className={styles.container}>
      <select
        className={styles.select}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(register &&
          register(`invoiceProducts[${itemOrder}][taxClassification]`))}
      >
        <option value="2">10%</option>
        <option value="1">軽減8%</option>
        <option value="0">対象外</option>
      </select>
    </td>
  )
}

interface TaxRateSelectProps {
  itemOrder: number
  register?: UseFormRegister<any>
}
