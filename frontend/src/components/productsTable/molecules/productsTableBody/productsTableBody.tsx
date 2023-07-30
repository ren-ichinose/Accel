import { Control, UseFormRegister } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import ProductsTableRow from '../productsTableRow/productsTableRow'

export default function ProductsTableBody({
  rows,
  register,
  control,
}: {
  rows: number[]
  register: UseFormRegister<CreateInvoice>
  control: Control<CreateInvoice>
}) {
  return (
    <tbody>
      {rows.map((itemOrder) => (
        <ProductsTableRow
          key={itemOrder}
          register={register}
          control={control}
          itemOrder={itemOrder}
        />
      ))}
    </tbody>
  )
}
