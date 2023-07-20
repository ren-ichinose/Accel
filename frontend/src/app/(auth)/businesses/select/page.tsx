'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import Motion from '@/components/common/layout/motion/motion'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import useQueryBusinessAll from '@/hooks/useQueryBusinessAll'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import AuthFoot from '../../_components/auth/atoms/formFoot/authFoot'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'
import SelectBusiness from '../../_components/auth/molecules/selectBusiness/selectBusiness'

export default function Select() {
  const router = useRouter()
  const { data: businessList, isSuccess } = useQueryBusinessAll()

  const errorScheme = yup.object().shape({
    businessId: yup.string().required('・事業者名: 選択必須'),
  })

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ businessId: string }>({
    resolver: yupResolver(errorScheme),
  })

  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const onSubmit = (data: { businessId: string }) => {
    reset()
    router.push(`/${data.businessId}`)
  }

  return (
    isSuccess && (
      <Motion>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AuthHead title="事業者選択" className="select" />
          {errorMessages.length > 0 && (
            <ErrorMassages errorMassages={errorMessages} />
          )}
          <SelectBusiness
            register={register}
            control={control}
            businessList={businessList}
          />
          <Button className="authSubmid" type="submit" text="決定" />
          <AuthFoot
            href="/businesses/register"
            text="事業者の新規登録はこちら"
          />
        </form>
      </Motion>
    )
  )
}
