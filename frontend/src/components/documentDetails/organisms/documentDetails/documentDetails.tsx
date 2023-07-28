import type { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import type { CreateInvoice } from '@/interfaces/main.interface'
import BasicInfo from '../../molecules/basicInfo/basicInfo'
import IssuerInfo from '../../molecules/issuerInfo/issuerInfo'
import styles from './documentDetails.module.css'

export default function DocumentDetails({
  register,
  businessId,
  setValue,
}: {
  register: UseFormRegister<CreateInvoice>
  businessId: string
  setValue: UseFormSetValue<CreateInvoice>
}) {
  return (
    <div className={styles.wrapper}>
      <BasicInfo register={register} />
      <IssuerInfo
        register={register}
        businessId={businessId}
        setValue={setValue}
      />
    </div>
  )
}
