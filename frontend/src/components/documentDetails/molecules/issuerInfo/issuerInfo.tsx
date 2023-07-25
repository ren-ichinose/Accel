import TextareaWithLabel from '@/components/common/molecules/textareaWithLabel/textareaWithLabel'
import type { CreateInvoice } from '@/interfaces/main.interface'
import type { UseFormRegister } from 'react-hook-form'
import DocumentDetailsTitle from '../../atoms/documentDetailsTitle/documentDetailsTitle'
import styles from './issuerInfo.module.css'

export default function IssuerInfo({
  register,
}: {
  register: UseFormRegister<CreateInvoice>
}) {
  return (
    <div className={styles.container}>
      <DocumentDetailsTitle title="発行元情報" />
      <TextareaWithLabel
        textareaId="businessDetails"
        title="事業者情報"
        height="128px"
        register={register}
      />
    </div>
  )
}
