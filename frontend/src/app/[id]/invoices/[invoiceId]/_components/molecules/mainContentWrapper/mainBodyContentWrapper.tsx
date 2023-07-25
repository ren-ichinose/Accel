import styles from './mainBodyContentWrapper.module.css'

export default function MainBodyContentWrapper({
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
