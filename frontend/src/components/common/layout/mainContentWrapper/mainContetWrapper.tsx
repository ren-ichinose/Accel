import styles from './mainContentWrapper.module.css'

export default function MainContentWrapper({
  children,
  marginBottom = '0px',
}: {
  children: React.ReactNode
  marginBottom?: string
}) {
  const MainContentWrapperStyles = { marginBottom }
  return (
    <div className={styles.wrapper} style={MainContentWrapperStyles}>
      {children}
    </div>
  )
}
