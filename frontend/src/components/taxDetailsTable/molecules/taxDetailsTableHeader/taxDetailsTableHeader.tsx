import styles from './taxDetailsTableHeader.module.css'

const columns = [
  { columnName: 'null', label: '' },
  { columnName: 'taxExcludedPrice', label: '税抜金額' },
  { columnName: 'taxPrice', label: '消費税金額' },
  { columnName: 'taxIncludedPrice', label: '税込金額' },
]
export default function TaxDetailsTableHeader() {
  return (
    <thead>
      <tr className={styles.container}>
        {columns.map((column) => (
          <th key={column.columnName} className={styles.headerItem}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
