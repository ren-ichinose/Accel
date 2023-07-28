import styles from './errorMassages.module.css'

export default function ErrorMassages({
  errorMassages,
}: {
  errorMassages: (string | undefined)[]
}) {
  return (
    <div className={styles.container}>
      {errorMassages.map((msg) => (
        <p key={msg}>{msg}</p>
      ))}
    </div>
  )
}
