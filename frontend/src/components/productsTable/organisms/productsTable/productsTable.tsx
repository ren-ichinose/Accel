import { useState } from 'react'
import type { Control, UseFormRegister } from 'react-hook-form'
import { HiOutlinePlusSm } from 'react-icons/hi'
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
  const [rows, setRows] = useState([0, 1, 2, 3, 4])
  const handleAddRow = () => {
    if (rows.length >= 12) {
      window.alert('追加できる行数が上限に達しました。')
      return
    }
    setRows([...rows, rows.length])
  }

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <ProductsTableHeader />
        <ProductsTableBody rows={rows} register={register} control={control} />
      </table>
      <button type="button" className={styles.button} onClick={handleAddRow}>
        <HiOutlinePlusSm className={styles.icon} />
        行を追加する
      </button>
    </div>
  )
}
