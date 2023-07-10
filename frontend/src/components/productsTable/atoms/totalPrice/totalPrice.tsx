import styles from './totalPrice.module.css'

export default function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <td className={styles.container}>
      <p className={styles.totalPrice}>{totalPrice}</p>
    </td>
  )
}
