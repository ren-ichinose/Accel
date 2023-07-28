import type { UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import TextareaWithLabel from '../common/molecules/textareaWithLabel/textareaWithLabel'
import PopupNote from './popupNote/popupNote'

export default function Notes({
  businessId,
  register,
  setValue,
}: {
  businessId: string
  register: UseFormRegister<CreateInvoice>
  setValue: UseFormSetValue<CreateInvoice>
}) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue('notes', e.target.value)
  }

  return (
    <TextareaWithLabel textareaId="notes" title="備考欄" register={register}>
      <PopupNote handleChange={handleChange} businessId={businessId} />
    </TextareaWithLabel>
  )
}
