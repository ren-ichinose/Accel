import ProductsTableBody from '../../molecules/productsTableBody/productsTableBody'
import ProductsTableHeader from '../../molecules/productsTableHeader/productsTableHeader'
import styles from './productsTable.module.css'

export default function ProductsTable({ register }: { register: any }) {
  return (
    <table className={styles.table}>
      <ProductsTableHeader />
      <ProductsTableBody register={register} />
    </table>
  )
}
