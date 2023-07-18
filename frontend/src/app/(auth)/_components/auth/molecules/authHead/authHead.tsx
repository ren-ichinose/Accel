import { TbShieldCheck } from 'react-icons/tb'
import styles from './authHead.module.css'

export default function AuthHead({
  title,
  className = 'title',
}: {
  title: string
  className?: string
}) {
  return (
    <>
      <TbShieldCheck className={styles.icon} />
      <h2 className={styles[className]}>{title}</h2>
    </>
  )
}
