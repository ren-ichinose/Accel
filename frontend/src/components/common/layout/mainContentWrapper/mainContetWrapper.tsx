import styles from './mainContentWrapper.module.css'

export default function MainContentWrapper({
  children,
  marginBottom,
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

MainContentWrapper.defaultProps = {
  marginBottom: '0px',
}
