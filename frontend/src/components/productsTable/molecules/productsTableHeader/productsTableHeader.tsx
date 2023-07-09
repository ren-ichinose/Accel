import styles from './productsTableHeader.module.css'

export default function ProductsTableHeader() {
  const columns = [
    {
      columnName: 'transactionDate',
      label: '日付',
    },
    {
      columnName: 'productName',
      label: '品名・品番',
    },
    {
      columnName: 'quantity',
      label: '数量',
    },
    {
      columnName: 'unit',
      label: '単位',
    },
    {
      columnName: 'price',
      label: '単価',
    },
    {
      columnName: 'taxType',
      label: '税区分',
    },
    {
      columnName: 'totalPrice',
      label: '金額',
    },
  ]
  return (
    <thead className={styles.container}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.columnName}
            className={`${styles[column.columnName]} ${styles.header}`}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
