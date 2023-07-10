import styles from './fixedElementOffset.module.css'

export default function FixedElementOffset({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.wrapper}>{children}</div>
}
