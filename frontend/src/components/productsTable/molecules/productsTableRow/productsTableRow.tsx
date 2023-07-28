import { UseFormRegister, useWatch } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import formatToJPY from '@/utils/formatToJPY'
import ProductsTableBodyItem from '../../atoms/productsTableBodyItem/productsTableBodyItem'
import TaxRateSelect from '../../atoms/taxRateSelect/taxRateSelect'
import TotalPrice from '../../atoms/totalPrice/totalPrice'
import styles from './productsTableRow.module.css'

const colums = [
  {
    columnName: 'transactionDate',
    textAlign: 'center' as const,
    type: 'date',
  },
  {
    columnName: 'productName',
  },
  {
    columnName: 'quantity',
    textAlign: 'right' as const,
  },
  {
    columnName: 'unit',
    textAlign: 'center' as const,
  },
  {
    columnName: 'price',
    textAlign: 'right' as const,
  },
  {
    columnName: 'taxType',
    textAlign: 'center' as const,
    type: 'taxType',
  },
  {
    columnName: 'totalPrice',
    textAlign: 'right' as const,
    type: 'totalPrice',
  },
]

export default function ProductsTableRow({
  itemOrder,
  register,
  control,
}: {
  itemOrder: number
  register: UseFormRegister<CreateInvoice>
  control: any
}) {
  const watchPrice = useWatch({
    control,
    name: `invoiceProducts[${itemOrder}][price]` as const,
  })

  const watchQuantity = useWatch({
    control,
    name: `invoiceProducts[${itemOrder}][quantity]`,
  })

  const totalPrice = formatToJPY(watchPrice * watchQuantity)
  return (
    <tr className={styles.row}>
      {colums.map(({ columnName, textAlign, type }) => {
        if (type === 'taxType')
          return (
            <TaxRateSelect
              key={columnName}
              register={register}
              itemOrder={itemOrder}
            />
          )
        if (type === 'totalPrice') {
          return <TotalPrice key={columnName} totalPrice={totalPrice} />
        }
        if (type === 'date') {
          return (
            <ProductsTableBodyItem
              key={columnName}
              textAlign={textAlign}
              columnName={columnName}
              register={register}
              itemOrder={itemOrder}
              type={type}
            />
          )
        }
        return (
          <ProductsTableBodyItem
            key={columnName}
            textAlign={textAlign}
            columnName={columnName}
            register={register}
            itemOrder={itemOrder}
          />
        )
      })}
    </tr>
  )
}
