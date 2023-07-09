import styles from './contentMarginBottom.module.css'

export default function ContentMarginBottom({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.wrapper}>{children}</div>
}
