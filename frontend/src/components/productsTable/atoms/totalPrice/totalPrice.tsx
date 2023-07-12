import styles from './totalPrice.module.css'

export default function TotalPrice({ totalPrice }: { totalPrice: string }) {
  return (
    <td className={styles.container}>
      <div className={styles.totalPrice}>{totalPrice}</div>
    </td>
  )
}
