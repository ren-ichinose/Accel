import ProductsTableBodyItem from '../../atoms/productsTableBodyItem/productsTableBodyItem'
import TaxRateSelect from '../../atoms/taxRateSelect/taxRateSelect'
import TotalPrice from '../../atoms/totalPrice/totalPrice'

const data = [
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

const rowId = [0, 1, 2, 3, 4]

export default function ProductsTableBody() {
  return (
    <tbody>
      {rowId.map((id) => (
        <tr key={id}>
          {data.map(({ columnName, textAlign }) => {
            if (columnName === 'taxType')
              return <TaxRateSelect key={columnName} />
            if (columnName === 'totalPrice')
              return <TotalPrice key={columnName} totalPrice={1000000} />
            return (
              <ProductsTableBodyItem key={columnName} textAlign={textAlign} />
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}
