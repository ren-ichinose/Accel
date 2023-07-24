import { useRouter } from 'next/navigation'
import postData from '@/utils/postData'
import { useMutation } from '@tanstack/react-query'

export default function useMutateInvoice(reset: any) {
  const router = useRouter()

  const createInvoiceMutation = useMutation(
    async ({ businessId, formData }: { businessId: string; formData: any }) => {
      const invoice: any = await postData(
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
        invoice: any
      }) => {
        reset()
        router.push(`/${businessId}/invoices/${invoice.id}`)
      },
      onError: (err: any) => {
        if (err.status === 401 || err.status === 403) {
          reset()
          router.push('/users/login')
        }
        console.error(err)
      },
    }
  )

  return { createInvoiceMutation }
}
