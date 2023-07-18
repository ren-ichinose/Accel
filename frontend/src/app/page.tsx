import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import styles from './welcome.module.css'

export default function welcome() {
  return (
    <main className={styles.wrapper}>
      <h1>Wellcome to MyApp !</h1>
      <Link href="/users/login" className={styles.newLink}>
        Let&apos;s get started, login here
        <span className={styles.iconPencil}>
          <HiPencilAlt />
        </span>
      </Link>
    </main>
  )
}
