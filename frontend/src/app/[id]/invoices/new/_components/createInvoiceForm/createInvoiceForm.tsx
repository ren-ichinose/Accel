'use client'

import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails'
import FinancialSummary from '@/components/financialSummary/financialSummary'
import MainFood from '@/components/mainFood/mainFood'
import Notes from '@/components/notes/notes'
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export default function CreateInvoiceForm() {
  const errorScheme = yup.object().shape({
    documentIssueDate: yup.date().required(),
    documentNumber: yup.string().required(),
    customerName: yup.string().required(),
    customerTitle: yup.string(),
    businessDetails: yup.string().required(),
    mSealsId: yup.string(),
    notes: yup.string(),
    invoiceProducts: yup.array().of(
      yup.object().shape({
        itemOrder: yup.number().required(),
        transactionDate: yup.date(),
        productName: yup.string(),
        quantity: yup.number(),
        unit: yup.string(),
        price: yup.number(),
        taxClassification: yup.string().required(),
      })
    ),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(errorScheme),
  })

  const onSubmit = (data: any) => {
    const invoiceProducts = data.invoiceProducts.map(
      (product: any, index: any) => ({ itemOrder: index, ...product })
    )
    const newData = { ...data, invoiceProducts }
    console.log(newData)
  }

  // Yupのエラーのメッセージを配列に格納する
  const errorMessages = Object.values(errors)
    .filter((error) => error.message !== undefined)
    .map((error) => error.message && error.message)

  // const invoiceProductsError0 = errors.invoiceProducts?.[0]
  // const invoiceProductsError1 = errors.invoiceProducts?.[1]
  // const invoiceProductsError2 = errors.invoiceProducts?.[2]
  // const invoiceProductsError3 = errors.invoiceProducts?.[3]
  // const invoiceProductsError4 = errors.invoiceProducts?.[4]

  // 'undefined' の可能性があるオブジェクトを呼び出すことはできません。ts(2722)
  // invoiceProductsのエラーが表示できないため、余裕が出来次第対応する。
  // const invoiceProductsErrors = errors.invoiceProducts
  // if (invoiceProductsErrors !== undefined) {
  //   invoiceProductsErrors.map(() => {})
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errorMessages.map((errorMassage) => (
        <p key={errorMassage}>{errorMassage}</p>
      ))}
      <DocumentDetails register={register} />
      <ProductsTable register={register} control={control} />
      <FinancialSummary control={control} />
      <Notes register={register} />
      <MainFood />
    </form>
  )
}
