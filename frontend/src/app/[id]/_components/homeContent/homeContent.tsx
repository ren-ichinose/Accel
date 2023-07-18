import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import styles from './homeContent.module.css'

export default function HomeContent({ businessId }: { businessId: string }) {
  return (
    <div className={styles.wrapper}>
      <p>Wellcome to MyApp !</p>
      <Link href={`${businessId}/invoices/new`} className={styles.link}>
        Create Invoices Here
        <span className={styles.iconPencil}>
          <HiPencilAlt />
        </span>
      </Link>
    </div>
  )
}
