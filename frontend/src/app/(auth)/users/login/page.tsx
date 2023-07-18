'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import { User } from '@/interfaces/main.interface'
import postData from '@/utils/postData'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFoot from '../../_components/auth/atoms/formFoot/authFoot'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Login() {
  const router = useRouter()
  const [serverErrors, setServerErrors] = useState<string[]>([])

  const errorScheme = yup.object().shape({
    loginId: yup
      .string()
      .required('・ログインID: 入力必須')
      .min(4, '・ログインID: 半角英数字4文字以上'),
    password: yup
      .string()
      .required('・パスワード: 入力必須')
      .min(8, '・パスワード: 半角英数字8文字以上'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(errorScheme),
  })

  const clientErrors = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = async (data: User) => {
    try {
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)

      router.push('/businesses/select')
    } catch (error: any) {
      if (error.status === 403) setServerErrors([error.info.message])
    }
  }

  const showErrors = (sErrors: string[], cErrors: (string | undefined)[]) => {
    if (cErrors.length > 0) {
      if (serverErrors.length > 0) setServerErrors([])
      return <ErrorMassages errorMassages={clientErrors} />
    }
    if (sErrors.length > 0)
      return <ErrorMassages errorMassages={serverErrors} />
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthHead title="ログイン" />
      {showErrors(serverErrors, clientErrors)}
      <InputWithLabel
        title="ログインID"
        placeholder="ログインIDを入力してください"
        inputId="loginId"
        height="48px"
        marginBottom="16px"
        register={register}
      />
      <InputWithLabel
        title="パスワード"
        type="password"
        placeholder="パスワードを入力してください"
        inputId="password"
        height="48px"
        marginBottom="32px"
        register={register}
      />
      <Button className="authSubmid" type="submit" text="ログイン" />
      <AuthFoot href="/users/register" text="新規登録はこちら" />
    </form>
  )
}
