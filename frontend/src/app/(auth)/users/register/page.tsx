import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Register() {
  return (
    <>
      <AuthHead title="新規登録" />
      <InputWithLabel
        title="ログインID"
        placeholder="半角英数字4文字以上"
        inputId="loginId"
        height="48px"
        marginBottom="32px"
      />
      <InputWithLabel
        title="パスワード"
        placeholder="半角英数字8文字以上"
        inputId="password"
        height="48px"
        marginBottom="32px"
      />
      <Button className="authSubmid" type="submit" text="新規登録" />
      <AuthFood href="/users/login" text="アカウントをお持ちの方はこちら" />
    </>
  )
}
