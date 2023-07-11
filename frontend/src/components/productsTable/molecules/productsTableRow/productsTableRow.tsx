import formatToJPY from '@/utils/formatToJPY'
import { useWatch } from 'react-hook-form'
import ProductsTableBodyItem from '../../atoms/productsTableBodyItem/productsTableBodyItem'
import TaxRateSelect from '../../atoms/taxRateSelect/taxRateSelect'
import TotalPrice from '../../atoms/totalPrice/totalPrice'

const colums = [
  {
    columnName: 'transactionDate',
    textAlign: 'center' as const,
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
  },
  {
    columnName: 'totalPrice',
    textAlign: 'right' as const,
  },
]

export default function ProductsTableRow({
  itemOrder,
  register,
  control,
}: {
  itemOrder: number
  register: any
  control: any
}) {
  const watchPrice = useWatch({
    control,
    name: `invoiceProducts[${itemOrder}][price]`,
  })

  const watchQuantity = useWatch({
    control,
    name: `invoiceProducts[${itemOrder}][quantity]`,
  })

  const totalPrice = formatToJPY(watchPrice * watchQuantity)
  return (
    <tr>
      {colums.map(({ columnName, textAlign }) => {
        if (columnName === 'taxType')
          return (
            <TaxRateSelect
              key={columnName}
              register={register}
              itemOrder={itemOrder}
            />
          )
        if (columnName === 'totalPrice') {
          return <TotalPrice key={columnName} totalPrice={totalPrice} />
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
