import BasicInfo from '../../molecules/basicInfo/basicInfo'
import IssuerInfo from '../../molecules/issuerInfo/issuerInfo'
import styles from './documentDetails.module.css'

export default function DocumentDetails({ register }: { register: any }) {
  return (
    <div className={styles.wrapper}>
      <BasicInfo register={register} />
      <IssuerInfo register={register} />
    </div>
  )
}
