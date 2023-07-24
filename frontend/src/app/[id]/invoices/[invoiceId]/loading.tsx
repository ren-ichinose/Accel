import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import styles from './invoiceDetail.module.css'

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <LoadingGrid />
    </div>
  )
}
