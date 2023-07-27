import styles from './mainBodyContentWrapper.module.css'

export default function MainBodyContentWrapper({
  children,
  height = 'auto',
  maxHeight = '',
}: {
  children: React.ReactNode
  height?: string
  maxHeight?: string
}) {
  const style = {
    height,
    maxHeight,
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} style={style}>
        {children}
      </div>
    </div>
  )
}
