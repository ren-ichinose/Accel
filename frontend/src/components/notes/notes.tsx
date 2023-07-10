import TextareaWithLabel from '../common/molecules/textareaWithLabel/textareaWithLabel'

export default function Notes({ register }: { register: any }) {
  return (
    <TextareaWithLabel textareaId="notes" title="備考欄" register={register} />
  )
}
