'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import Motion from '@/components/common/layout/motion/motion'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import type { User } from '@/interfaces/main.interface'
import postData from '@/utils/postData'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFoot from '../../_components/auth/atoms/formFoot/authFoot'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'
import styles from './register.module.css'

export default function Register() {
  const router = useRouter()
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

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
    reset,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(errorScheme),
  })

  const onSubmit = async (data: User) => {
    try {
      setIsLoading(true)
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, data)
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
      reset()
      router.push('/businesses/register')
    } catch (error: any) {
      setIsLoading(false)
      if (error.status === 403) setServerErrors([error.info.message])
    }
  }

  const clientErrors = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

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
    <Motion>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthHead title="新規登録" />
        {showErrors(serverErrors, clientErrors)}
        <InputWithLabel
          title="ログインID"
          placeholder="半角英数字4文字以上"
          inputId="loginId"
          height="48px"
          marginBottom="16px"
          register={register}
        />
        <InputWithLabel
          title="パスワード"
          placeholder="半角英数字8文字以上"
          inputId="password"
          height="48px"
          marginBottom="32px"
          type="password"
          register={register}
        />
        <Button className="authSubmid" type="submit" text="新規登録" />
        <AuthFoot href="/users/login" text="アカウントをお持ちの方はこちら" />
      </form>
      {isLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </Motion>
  )
}
