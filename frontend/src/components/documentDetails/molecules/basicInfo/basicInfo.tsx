import { UseFormRegister } from 'react-hook-form'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import { CreateInvoice } from '@/interfaces/main.interface'
import DocumentDetailsTitle from '../../atoms/documentDetailsTitle/documentDetailsTitle'
import styles from './basicInfo.module.css'

export default function BasicInfo({
  register,
}: {
  register: UseFormRegister<CreateInvoice>
}) {
  const InputWithLabels = [
    {
      title: '発行日',
      inputId: 'documentIssueDate',
      width: '50%',
      marginBottom: '16px',
      type: 'date',
    },
    {
      title: '請求番号',
      inputId: 'documentNumber',
      width: '50%',
      marginBottom: '16px',
    },
  ]
  return (
    <div className={styles.container}>
      <DocumentDetailsTitle title="基本情報" />
      {InputWithLabels.map(({ title, inputId, width, marginBottom, type }) => (
        <InputWithLabel
          key={inputId}
          title={title}
          inputId={inputId}
          width={width || undefined}
          marginBottom={marginBottom || undefined}
          register={register}
          type={type || undefined}
        />
      ))}
      <div className={styles.wrapper}>
        <InputWithLabel
          title="取引先名"
          inputId="customerName"
          width="calc(100% - 84px)"
          marginRight="12px"
          register={register}
        />
        <InputWithLabel
          inputId="customerTitle"
          width="72px"
          register={register}
          textAlign="center"
        />
      </div>
    </div>
  )
}
