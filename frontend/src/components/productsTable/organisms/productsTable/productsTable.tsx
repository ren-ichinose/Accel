import type { Control, UseFormRegister } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import ProductsTableBody from '../../molecules/productsTableBody/productsTableBody'
import ProductsTableHeader from '../../molecules/productsTableHeader/productsTableHeader'
import styles from './productsTable.module.css'

export default function ProductsTable({
  register,
  control,
}: {
  register: UseFormRegister<CreateInvoice>
  control: Control<CreateInvoice>
}) {
  return (
    <table className={styles.table}>
      <ProductsTableHeader />
      <ProductsTableBody register={register} control={control} />
    </table>
  )
}
