'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import { UserAuth } from '@/interfaces/main.interface'
import postData from '@/utils/postData'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Login() {
  const router = useRouter()

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
  } = useForm<UserAuth>({
    resolver: yupResolver(errorScheme),
  })

  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = async (data: UserAuth) => {
    try {
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)

      router.push('/businesses/select')
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('エラーが発生しました')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthHead title="ログイン" />
      {errorMessages.length > 0 && (
        <ErrorMassages errorMassages={errorMessages} />
      )}
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
      <AuthFood href="/users/register" text="新規登録はこちら" />
    </form>
  )
}
