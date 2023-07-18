import Link from 'next/link'
import styles from './authFoot.module.css'

export default function AuthFoot({
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
