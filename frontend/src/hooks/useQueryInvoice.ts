'use client'

import { useRouter } from 'next/navigation'
import getData from '@/utils/getData'
import { useQuery } from '@tanstack/react-query'

export default function useQueryInvoice(invoiceId: string) {
  const router = useRouter()

  const getInvoice = async (id: string) => {
    const data: any = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/invoices/${id}`
    )
    return data
  }

  return useQuery<any, Error>({
    queryKey: ['invoice'],
    queryFn: () => getInvoice(invoiceId),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403) router.push('/users/login')
    },
  })
}
