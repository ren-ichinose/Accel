import styles from './totalPrice.module.css';

export default function TotalPrice({ totalPrice }: { totalPrice: number }) {
  return (
    <td className={styles.container}>
      <div className={styles.totalPrice}>{totalPrice > 0 && totalPrice}</div>
    </td>
  );
}
