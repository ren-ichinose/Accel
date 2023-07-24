import styles from './mainFootWrapper.module.css'

export default function MainFootWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}
