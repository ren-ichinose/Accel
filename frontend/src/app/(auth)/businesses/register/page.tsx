'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from '@/components/common/atoms/button/button'
import Motion from '@/components/common/layout/motion/motion'
import ErrorMassages from '@/components/common/molecules/errorMassages/errorMassages'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import useQueryBusinessAll from '@/hooks/useQueryBusinessAll'
import { Business, BussinesAuth } from '@/interfaces/main.interface'
import postData from '@/utils/postData'
import AuthFoot from '../../_components/auth/atoms/formFoot/authFoot'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'
import styles from './register.module.css'

export default function Register() {
  const router = useRouter()
  const { data: isNewBusinesses } = useQueryBusinessAll()
  const [isLoading, setIsLoading] = useState(false)

  const errorScheme = yup.object().shape({
    businessName: yup.string().required('・ログインID: 入力必須'),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BussinesAuth>({
    resolver: yupResolver(errorScheme),
  })

  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = async (data: BussinesAuth) => {
    try {
      setIsLoading(true)
      const business: Business = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/business`,
        data
      )
      reset()
      router.push(`/${business.id}`)
    } catch (error) {
      if (error instanceof Error) {
        setIsLoading(false)
        throw new Error(error.message)
      }
      setIsLoading(false)
      throw new Error('エラーが発生しました')
    }
  }

  return (
    <Motion>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthHead title="事業者登録" />
        {errorMessages.length > 0 && (
          <ErrorMassages errorMassages={errorMessages} />
        )}
        <InputWithLabel
          title="事業者名"
          placeholder="事業者名を入力してください"
          inputId="businessName"
          height="48px"
          marginBottom="32px"
          register={register}
        />
        <Button className="authSubmid" type="submit" text="登録" />
        {isNewBusinesses && isNewBusinesses.length > 0 && (
          <AuthFoot
            href="/businesses/select"
            text="現在登録済みの事業者はこちら"
          />
        )}
      </form>
      {isLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </Motion>
  )
}
