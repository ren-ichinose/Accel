import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { UseFormReset } from 'react-hook-form'
import type { CreateInvoice, Invoice } from '@/interfaces/main.interface'
import postData from '@/utils/postData'

export default function useMutateInvoice(reset: UseFormReset<CreateInvoice>) {
  const router = useRouter()

  const createInvoiceMutation = useMutation(
    async ({
      businessId,
      formData,
    }: {
      businessId: string
      formData: CreateInvoice
    }) => {
      const invoice: Invoice = await postData(
        `${process.env.NEXT_PUBLIC_API_URL}/business/${businessId}/invoices`,
        formData
      )
      return { businessId, invoice }
    },
    {
      onSuccess: ({
        businessId,
        invoice,
      }: {
        businessId: string
        invoice: Invoice
      }) => {
        reset()
        router.push(`/${businessId}/invoices/${invoice.id}`)
      },
      onError: (err: any) => {
        if (err.status === 401 || err.status === 403) {
          reset()
          router.push('/users/login')
        }
        throw new Error(err)
      },
    }
  )

  return { createInvoiceMutation }
}
