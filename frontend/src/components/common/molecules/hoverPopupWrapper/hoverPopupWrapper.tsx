import { HiOutlineBell } from 'react-icons/hi'
import styles from './hoverPopupWrapper.module.css'

export default function HoverPopupWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className={styles.wrapper}>
      <HiOutlineBell className={styles.icon} />
      <div className={styles.contentWrapper}>{children}</div>
    </span>
  )
}
