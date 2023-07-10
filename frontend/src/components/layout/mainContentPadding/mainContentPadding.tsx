import styles from './mainContentPadding.module.css'

export default function MainContentPadding({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.container}>{children}</div>
}
