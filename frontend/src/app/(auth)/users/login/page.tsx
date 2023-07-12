import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Login() {
  return (
    <>
      <AuthHead title="ログイン" />
      <InputWithLabel
        title="ログインID"
        placeholder="ログインIDを入力してください"
        inputId="loginId"
        height="48px"
        marginBottom="16px"
      />
      <InputWithLabel
        title="パスワード"
        placeholder="パスワードを入力してください"
        inputId="password"
        height="48px"
        marginBottom="32px"
      />
      <Button className="authSubmid" type="submit" text="ログイン" />
      <AuthFood href="/users/register" text="新規登録はこちら" />
    </>
  )
}
