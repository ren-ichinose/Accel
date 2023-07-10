import styles from './mainHeadBusinessName.module.css'

export default function MainHeadBusinessName({
  businessName,
}: MainHeadBusinessNameProprs) {
  return <p className={styles.businessName}>{businessName}</p>
}

interface MainHeadBusinessNameProprs {
  businessName: string
}
