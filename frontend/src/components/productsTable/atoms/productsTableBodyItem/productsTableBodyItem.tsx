import type { UseFormRegister } from 'react-hook-form'
import styles from './productsTableBodyItem.module.css'

export default function ProductsTableBodyItem({
  textAlign = 'left',
  itemOrder,
  columnName,
  register,
  type = undefined,
}: ProductsTableBodyItemProps) {
  return (
    <td className={styles.container}>
      <input
        className={styles.input}
        type={type}
        style={{ textAlign }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(register &&
          register(`invoiceProducts[${itemOrder}][${columnName}]]`))}
      />
    </td>
  )
}

interface ProductsTableBodyItemProps {
  textAlign?: 'left' | 'right' | 'center'
  itemOrder: number
  columnName: string
  register: UseFormRegister<any>
  type?: string
}
