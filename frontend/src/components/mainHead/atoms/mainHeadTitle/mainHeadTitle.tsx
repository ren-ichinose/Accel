import styles from './mainHeadTitle.module.css'

export default function MainHeadTitle({ title }: MainHeadTitleProps) {
  return <h2 className={styles.title}>{title}</h2>
}

interface MainHeadTitleProps {
  title: string
}
