'use client'

import type { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import TextareaWithLabel from '@/components/common/molecules/textareaWithLabel/textareaWithLabel'
import type { CreateInvoice } from '@/interfaces/main.interface'
import DocumentDetailsTitle from '../../atoms/documentDetailsTitle/documentDetailsTitle'
import PopupBusinessDetails from '../popupBusinessDetails/popupBusinessDetails'
import styles from './issuerInfo.module.css'

export default function IssuerInfo({
  businessId,
  register,
  setValue,
}: {
  businessId: string
  register: UseFormRegister<CreateInvoice>
  setValue: UseFormSetValue<CreateInvoice>
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue('businessDetails', e.target.value)
  }

  return (
    <div className={styles.container}>
      <DocumentDetailsTitle title="発行元情報" />
      <TextareaWithLabel
        textareaId="businessDetails"
        title="事業者情報"
        height="128px"
        register={register}
      >
        <PopupBusinessDetails
          businessId={businessId}
          handleChange={handleChange}
        />
      </TextareaWithLabel>
    </div>
  )
}
