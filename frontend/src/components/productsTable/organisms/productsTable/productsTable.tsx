import ProductsTableBody from '../../molecules/productsTableBody/productsTableBody'
import ProductsTableHeader from '../../molecules/productsTableHeader/productsTableHeader'
import styles from './productsTable.module.css'

export default function ProductsTable() {
  return (
    <table className={styles.table}>
      <ProductsTableHeader />
      <ProductsTableBody />
    </table>
  )
}
