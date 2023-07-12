import Link from 'next/link'
import styles from './authFood.module.css'

export default function AuthFood({
  href,
  text,
}: {
  href: string
  text: string
}) {
  return (
    <div className={styles.container}>
      <Link href={href} className={styles.text}>
        {text}
      </Link>
    </div>
  )
}
