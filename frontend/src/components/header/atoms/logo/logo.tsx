import { HiLightningBolt } from 'react-icons/hi'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <h1 className={styles.logoText}>
      <span className={styles.icon}>
        <HiLightningBolt />
      </span>
      MyApp
    </h1>
  )
}
