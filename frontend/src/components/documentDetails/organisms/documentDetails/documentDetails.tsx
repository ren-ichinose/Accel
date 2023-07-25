import type { CreateInvoice } from '@/interfaces/main.interface'
import type { UseFormRegister } from 'react-hook-form'
import BasicInfo from '../../molecules/basicInfo/basicInfo'
import IssuerInfo from '../../molecules/issuerInfo/issuerInfo'
import styles from './documentDetails.module.css'

export default function DocumentDetails({
  register,
}: {
  register: UseFormRegister<CreateInvoice>
}) {
  return (
    <div className={styles.wrapper}>
      <BasicInfo register={register} />
      <IssuerInfo register={register} />
    </div>
  )
}
