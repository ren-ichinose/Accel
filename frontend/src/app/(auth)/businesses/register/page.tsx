'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import { Business, BussinesAuth } from '@/interfaces/main.interface'
import postData from '@/utils/postData'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'

export default function Register() {
  const router = useRouter()

  const errorScheme = yup.object().shape({
    businessName: yup.string().required('・ログインID: 入力必須'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BussinesAuth>({
    resolver: yupResolver(errorScheme),
  })

  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = async (data: BussinesAuth) => {
    try {
      const business: Business = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/business`,
        data
      )

      router.push(`/${business.id}`)
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('エラーが発生しました')
    }
  }

  return (
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
      <AuthFood href="/businesses/select" text="現在登録済みの事業者はこちら" />
    </form>
  )
}
