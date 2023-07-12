import styles from './productsTableBodyItem.module.css'

export default function ProductsTableBodyItem({
  textAlign,
  itemOrder,
  columnName,
  register,
  type,
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

ProductsTableBodyItem.defaultProps = {
  textAlign: 'left' as const,
  type: undefined,
}

interface ProductsTableBodyItemProps {
  textAlign?: 'left' | 'right' | 'center'
  itemOrder: number
  columnName: string
  register: any
  type?: string
}
