import { UseFormRegister } from 'react-hook-form'
import { CreateInvoice } from '@/interfaces/main.interface'
import TextareaWithLabel from '../common/molecules/textareaWithLabel/textareaWithLabel'

export default function Notes({
  register,
}: {
  register: UseFormRegister<CreateInvoice>
}) {
  return (
    <TextareaWithLabel textareaId="notes" title="備考欄" register={register} />
  )
}
