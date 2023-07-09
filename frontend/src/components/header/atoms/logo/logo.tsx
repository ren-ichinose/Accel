import Link from 'next/link'
import styles from './logo.module.css'

export default function Logo() {
  return (
    <h1>
      <Link href="/:businessId" className={styles.logoText}>
        MyApp
      </Link>
    </h1>
  )
}
