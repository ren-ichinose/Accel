import styles from './successMassages.module.css'

export default function SuccessMassages({
  successMassages,
}: {
  successMassages: (string | undefined)[]
}) {
  return (
    <div className={styles.container}>
      {successMassages.map((msg) => (
        <p key={msg}>{msg}</p>
      ))}
    </div>
  )
}
