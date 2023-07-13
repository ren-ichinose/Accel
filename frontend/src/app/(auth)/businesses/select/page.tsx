'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'
import SelectBusiness from '../../_components/auth/molecules/selectBusiness/selectBusiness'

export default function Select() {
  const router = useRouter()

  const errorScheme = yup.object().shape({
    businessId: yup.string().required('・事業者名: 選択必須'),
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ businessId: string }>({
    resolver: yupResolver(errorScheme),
  })

  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = (data: { businessId: string }) => {
    router.push(`/${data.businessId}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthHead title="事業者選択" className="select" />
      {errorMessages.length > 0 && (
        <ErrorMassages errorMassages={errorMessages} />
      )}
      <SelectBusiness register={register} control={control} />
      <Button className="authSubmid" type="submit" text="決定" />
      <AuthFood href="/businesses/register" text="事業者の新規登録はこちら" />
    </form>
  )
}
