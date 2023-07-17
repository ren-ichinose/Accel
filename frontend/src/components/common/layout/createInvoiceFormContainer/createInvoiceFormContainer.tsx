import styles from './createInvoiceFormContainer.module.css'

export default function CreateInvoiceFormContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={styles.container}>{children}</div>
}
