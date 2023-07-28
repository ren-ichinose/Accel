import { Control, UseFormRegister } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import ProductsTableRow from '../productsTableRow/productsTableRow'

const rows = [0, 1, 2, 3, 4, 5, 6]

export default function ProductsTableBody({
  register,
  control,
}: {
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
