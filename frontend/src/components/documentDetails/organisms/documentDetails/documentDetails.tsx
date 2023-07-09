import BasicInfo from '../../molecules/basicInfo/basicInfo'
import IssuerInfo from '../../molecules/issuerInfo/issuerInfo'
import styles from './documentDetails.module.css'

export default function DocumentDetails() {
  return (
    <div className={styles.wrapper}>
      <BasicInfo />
      <IssuerInfo />
    </div>
  )
}
