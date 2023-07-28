'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import getData from '@/utils/getData'

export default function useQueryInvoice(invoiceId: string) {
  const router = useRouter()

  const getInvoice = async (id: string) => {
    const data: any = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/invoices/${id}`
    )
    return data
  }

  return useQuery<any, Error>({
    queryKey: [`invoice_${invoiceId}`],
    queryFn: () => getInvoice(invoiceId),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403) router.push('/users/login')
    },
  })
}
