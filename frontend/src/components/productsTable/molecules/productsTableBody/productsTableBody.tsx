import ProductsTableBodyItem from '../../atoms/productsTableBodyItem/productsTableBodyItem'

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
          {data.map((column) => (
            <ProductsTableBodyItem
              key={column.columnName}
              textAlign={column.textAlign}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )
}
