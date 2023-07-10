import styles from './productsTableBodyItem.module.css'

export default function ProductsTableBodyItem({
  textAlign,
}: ProductsTableBodyItemProps) {
  return (
    <td className={styles.container}>
      <input className={styles.input} type="text" style={{ textAlign }} />
    </td>
  )
}

ProductsTableBodyItem.defaultProps = {
  textAlign: 'left' as const,
}

interface ProductsTableBodyItemProps {
  textAlign?: 'left' | 'right' | 'center'
}
