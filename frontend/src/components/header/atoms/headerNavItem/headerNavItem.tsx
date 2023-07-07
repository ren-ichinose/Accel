import Link from 'next/link'
import styles from './headerNavItem.module.css'

export default function HeaderNavItem({
  key,
  title,
  href,
}: {
  key: string
  title: string
  href: string
}) {
  return (
    <li className={styles.container} key={key}>
      <Link href={href} className={styles.item}>
        {title}
      </Link>
    </li>
  )
}
