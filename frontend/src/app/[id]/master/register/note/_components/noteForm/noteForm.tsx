'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import MasterRegisterMainFootWrapper from '@/app/[id]/master/_components/molecules/masterMainFootWrapper/masterRegisterMainFootWrapper'
import Motion from '@/components/common/layout/motion/motion'
import ErrorMassages from '@/components/common/molecules/errorMassages/errorMassages'
import InputWithLabel from '@/components/common/molecules/inputWithLabel/inputWithLabel'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import SuccessMassages from '@/components/common/molecules/successMassages/successMassages'
import TextareaWithLabel from '@/components/common/molecules/textareaWithLabel/textareaWithLabel'
import postData from '@/utils/postData'
import styles from './noteForm.module.css'

interface Note {
  name: string
  note: string
}

export default function NoteForm({ businessId }: { businessId: string }) {
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [issuccess, setIsSuccess] = useState(false)

  const router = useRouter()

  const errorScheme = yup.object().shape({
    name: yup
      .string()
      .required('・管理名: 入力必須')
      .max(15, '・管理名: 15文字以内'),
    note: yup
      .string()
      .required('・備考欄情報: 入力必須')
      .max(500, '・備考欄情報: 500文字以内'),
  })

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Note>({
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

  const watchedFields = watch(['name', 'note'])
  const showSuccess = () => {
    if (issuccess && !watchedFields[0] && !watchedFields[1])
      return (
        <Motion>
          <SuccessMassages successMassages={['備考欄情報を登録しました。']} />
        </Motion>
      )
    if (issuccess) setIsSuccess(false)
    return null
  }

  const onSubmit = async (data: Note) => {
    try {
      setIsLoading(true)
      const reqestData = { ...data, selectFlag: 2 }
      await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/business/${businessId}/m-note`,
        reqestData
      )
      reset()
      setIsSuccess(true)
      setIsLoading(false)
    } catch (error: any) {
      setServerErrors(['備考欄情報の登録ができませんでした。'])
      setIsLoading(false)
    }
  }

  const handleReturn = () => router.push(`/${businessId}/master/register`)

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
          title="備考欄情報"
          textareaId="note"
          register={register}
        />
        <MasterRegisterMainFootWrapper handleReturn={handleReturn} />
      </form>
      {isLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </>
  )
}
