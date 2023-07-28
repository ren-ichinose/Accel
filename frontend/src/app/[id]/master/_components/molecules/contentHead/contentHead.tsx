import { HiOutlineDatabase } from 'react-icons/hi'
import styles from './contentHead.module.css'

export default function ContentHead({ title }: { title: string }) {
  return (
    <>
      <HiOutlineDatabase className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
    </>
  )
}
