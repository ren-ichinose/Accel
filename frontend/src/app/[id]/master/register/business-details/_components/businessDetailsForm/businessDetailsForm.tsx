'use client'

import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Motion from '@/components/common/layout/motion/motion'
import ErrorMassages from '@/components/common/molecules/errorMassages/errorMassages'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import SuccessMassages from '@/components/common/molecules/successMassages/successMassages'
import TextareaWithLabel from '@/components/common/molecules/textareaWithLabel/textareaWithLabel'
import MainFoot from '@/components/mainFoot/mainFoot'
import postData from '@/utils/postData'
import styles from './businessDetailsForm.module.css'

interface BusinessDetails {
  name: string
  businessDetail: string
}

export default function BusinessDetailsForm({
  businessId,
}: {
  businessId: string
}) {
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [issuccess, setIsSuccess] = useState(false)

  const errorScheme = yup.object().shape({
    name: yup
      .string()
      .required('・管理名: 入力必須')
      .max(15, '・管理名: 15文字以内'),
    businessDetail: yup
      .string()
      .required('・事業者情報: 入力必須')
      .max(200, '・事業者情報: 200文字以内'),
  })

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<BusinessDetails>({
    resolver: yupResolver(errorScheme),
  })

  const clientErrors = Object.values(errors)
    .filter((error) => error?.message !== undefined)
    .map((error) => error?.message)

  const showErrors = (sErrors: string[], cErrors: (string | undefined)[]) => {
    if (cErrors.length > 0) {
      if (serverErrors.length > 0) setServerErrors([])
      return <ErrorMassages errorMassages={clientErrors} />
    }
    if (sErrors.length > 0)
      return <ErrorMassages errorMassages={serverErrors} />
    return null
  }

  const watchedFields = watch(['name', 'businessDetail'])
  const showSuccess = () => {
    if (issuccess && !watchedFields[0] && !watchedFields[1])
      return (
        <Motion>
          <SuccessMassages successMassages={['事業者情報を登録しました。']} />
        </Motion>
      )
    if (issuccess) setIsSuccess(false)
    return null
  }

  const onSubmit = async (data: BusinessDetails) => {
    try {
      setIsLoading(true)
      const reqestData = { ...data, selectFlag: 2 }
      await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/business/${businessId}/m-business-details`,
        reqestData
      )
      reset()
      setIsSuccess(true)
      setIsLoading(false)
    } catch (error: any) {
      setServerErrors(['事業者情報の登録ができませんでした。'])
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {showErrors(serverErrors, clientErrors)}
        {showSuccess()}
        <InputWithLabel
          title="管理名"
          inputId="name"
          placeholder="管理するための名前を入力してください"
          height="48px"
          marginBottom="32px"
          register={register}
        />
        <TextareaWithLabel
          title="事業者情報"
          textareaId="businessDetail"
          register={register}
        />
        <MainFoot cancelButtonOnClick={handleReset} />
      </form>
      {isLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </>
  )
}
