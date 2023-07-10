import styles from './documentDetailsTitle.module.css'

export default function DocumentDetailsTitle({
  title,
}: DocumentDetailsTitleProps) {
  return <h3 className={styles.title}>{title}</h3>
}

interface DocumentDetailsTitleProps {
  title: string
}
