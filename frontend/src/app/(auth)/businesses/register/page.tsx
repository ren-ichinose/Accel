import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Register() {
  return (
    <>
      <AuthHead title="事業者登録" />
      <InputWithLabel
        title="事業者名"
        placeholder="事業者名を入力してください"
        inputId="businessName"
        height="48px"
        marginBottom="32px"
      />
      <Button className="authSubmid" type="submit" text="登録" />
      <AuthFood href="/businesses/select" text="現在登録済みの事業者はこちら" />
    </>
  )
}
