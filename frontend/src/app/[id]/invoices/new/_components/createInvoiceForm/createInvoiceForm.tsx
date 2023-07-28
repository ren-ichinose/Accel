'use client'

import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import CreateInvoiceFormContainer from '@/components/common/layout/createInvoiceFormContainer/createInvoiceFormContainer'
import ErrorMassages from '@/components/common/molecules/errorMassages/errorMassages'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails'
import FinancialSummary from '@/components/financialSummary/financialSummary'
import MainFoot from '@/components/mainFoot/mainFoot'
import Notes from '@/components/notes/note'
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable'
import useMutateInvoice from '@/hooks/useMutateInvoice'
import type { CreateInvoice } from '@/interfaces/main.interface'
import styles from './createInvoiceForm.module.css'

export default function CreateInvoiceForm({
  params,
}: {
  params: { id: string }
}) {
  const [isLoading, setIsLoading] = useState(false)
  const errorScheme: yup.ObjectSchema<CreateInvoice> = yup.object().shape({
    documentIssueDate: yup
      .date()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    documentNumber: yup
      .string()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    customerName: yup.string().required('取引先名：入力が必須の項目です。'),
    customerTitle: yup.string().required('敬称：入力が必須の項目です。'),
    businessDetails: yup
      .string()
      .required('事業者情報：入力が必須の項目です。'),
    mSealsId: yup
      .string()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    notes: yup
      .string()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    invoiceProducts: yup
      .array()
      .of(
        yup.object().shape({
          transactionDate: yup
            .date()
            .nullable()
            .transform((curr, origin) => (origin === '' ? null : curr)),
          productName: yup
            .string()
            .nullable()
            .when(['transactionDate', 'quantity', 'unit', 'price'], {
              is: (
                transactionDate: Date,
                quantity: number,
                unit: string,
                price: number
              ) => transactionDate || quantity || unit || price,
              then: (schema) => schema.required(),
              otherwise: (schema) =>
                schema.transform((curr, origin) =>
                  origin === '' ? null : curr
                ),
            }),
          quantity: yup
            .number()
            .nullable()
            .when(['price'], {
              is: (price: number) => {
                if (price === null) return false
                return true
              },
              then: (schema) => schema.required(),
              otherwise: (schema) =>
                schema.transform((curr, origin) =>
                  origin === '' ? null : curr
                ),
            }),
          unit: yup
            .string()
            .nullable()
            .transform((curr, origin) => (origin === '' ? null : curr)),
          price: yup
            .number()
            .nullable()
            .transform((curr, origin) => (origin === '' ? null : curr)),
          taxClassification: yup.number().required(),
        })
      )
      .required(), // 請求明細が空の場合、エラーを出す項目を追加した。,
  })

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<CreateInvoice>({
    resolver: yupResolver(errorScheme),
    defaultValues: { customerTitle: '御中' },
  })

  const { createInvoiceMutation } = useMutateInvoice(reset)

  const onSubmit = (data: CreateInvoice) => {
    setIsLoading(true)
    const invoiceProducts = data.invoiceProducts
      .map((product, index) => ({ itemOrder: index, ...product }))
      .filter((product) => product.productName)
    const newData = { ...data, invoiceProducts }
    createInvoiceMutation.mutate({
      businessId: params.id,
      formData: newData,
    })
  }

  const prodauctsErrorMessages = [
    '請求明細：以下を確認してください。',
    '・摘要は日付、数量、単位、単価のいずれかを入力した場合、入力が必須の項目です。',
    '・数量は単価を入力した場合、入力が必須の項目です。',
    '・数量は半角数字で入力してください。',
    '・単価は半角数字で入力してください。',
  ]

  // Yupのエラーのメッセージを配列に格納する
  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message)

  const createInvoiceErrorMessages = () => {
    if (errors.invoiceProducts) {
      return [...errorMessages, ...prodauctsErrorMessages]
    }
    return [...errorMessages]
  }

  const handeleCancel = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('入力内容をリセットしますか？')) reset()
  }

  return isLoading ? (
    <div className={styles.wrapper}>
      <LoadingGrid />
    </div>
  ) : (
    <CreateInvoiceFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.values(errors).length > 0 && (
          <ErrorMassages errorMassages={createInvoiceErrorMessages()} />
        )}
        <DocumentDetails
          register={register}
          businessId={params.id}
          setValue={setValue}
        />
        <ProductsTable register={register} control={control} />
        <FinancialSummary control={control} />
        <Notes register={register} businessId={params.id} setValue={setValue} />
        <MainFoot cancelButtonOnClick={handeleCancel} />
      </form>
      {isLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </CreateInvoiceFormContainer>
  )
}
