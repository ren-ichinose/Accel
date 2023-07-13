import Link from 'next/link'
import styles from './logo.module.css'

export default function Logo({ busunessId }: { busunessId: string }) {
  return (
    <h1>
      <Link href={`/${busunessId}`} className={styles.logoText}>
        MyApp
      </Link>
    </h1>
  )
}
