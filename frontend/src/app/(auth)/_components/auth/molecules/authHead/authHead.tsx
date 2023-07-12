import { TbShieldCheck } from 'react-icons/tb'
import styles from './authHead.module.css'

export default function AuthHead({ title }: { title: string }) {
  return (
    <>
      <TbShieldCheck className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
    </>
  )
}
