'use client'

import { useState } from 'react'
import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails'
import ErrorMassages from '@/components/errorMassages/errorMassages'
import FinancialSummary from '@/components/financialSummary/financialSummary'
import MainFoot from '@/components/mainFoot/mainFoot'
import Notes from '@/components/notes/notes'
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable'
import useMutateInvoice from '@/hooks/useMutateInvoice'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export default function CreateInvoiceForm({
  params,
}: {
  params: { id: string }
}) {
  const errorScheme = yup.object().shape({
    documentIssueDate: yup.date().required(),
    documentNumber: yup.string().required(),
    customerName: yup.string().required(),
    customerTitle: yup.string().required(),
    businessDetails: yup.string().required(),
    mSealsId: yup
      .string()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    notes: yup
      .string()
      .nullable()
      .transform((curr, origin) => (origin === '' ? null : curr)),
    invoiceProducts: yup.array().of(
      yup.object().shape({
        transactionDate: yup
          .date()
          .nullable()
          .transform((curr, origin) => (origin === '' ? null : curr)),
        productName: yup
          .string()
          .nullable()
          .transform((curr, origin) => (origin === '' ? null : curr)),
        quantity: yup
          .number()
          .nullable()
          .transform((curr, origin) => (origin === '' ? null : curr)),
        unit: yup
          .string()
          .nullable()
          .transform((curr, origin) => (origin === '' ? null : curr)),
        price: yup
          .number()
          .optional()
          .nullable()
          .transform((curr, origin) => (origin === '' ? null : curr)),
        taxClassification: yup.number().required(),
      })
    ),
  })

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorScheme),
  })

  const { createInvoiceMutation } = useMutateInvoice(reset)
  const [isSccess, setIsSccess] = useState<boolean>(false)

  const onSubmit = (data: any) => {
    const invoiceProducts = data.invoiceProducts
      .map((product: any, index: any) => ({ itemOrder: index, ...product }))
      .filter((product: any) => product.productName)
    const newData = { ...data, invoiceProducts }
    createInvoiceMutation.mutate({
      businessId: params.id,
      formData: newData,
    })
    setIsSccess(true)
  }

  // Yupのエラーのメッセージを配列に格納する
  // const errorMessages = Object.values(errors)
  //   .filter((error) => error.message !== undefined)
  //   .map((error) => error.message)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.values(errors).length > 0 && (
        <ErrorMassages errorMassages={['Error:入力内容を確認してください。']} />
      )}
      {isSccess && (
        <ErrorMassages errorMassages={['Success:請求書を作成しました。']} />
      )}
      <DocumentDetails register={register} />
      <ProductsTable register={register} control={control} />
      <FinancialSummary control={control} />
      <Notes register={register} />
      <MainFoot />
    </form>
  )
}
