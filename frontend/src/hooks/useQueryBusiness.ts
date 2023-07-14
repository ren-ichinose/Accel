'use client'

import { useRouter } from 'next/navigation'
import { Business } from '@/interfaces/main.interface'
import getData from '@/utils/getData'
import { useQuery } from '@tanstack/react-query'

export default function useQueryBusiness(businessId: string) {
  const router = useRouter()

  const getBusiness = async (id: string) => {
    const data: Business = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/business/${id}`
    )
    return data
  }

  return useQuery<Business, Error>({
    queryKey: ['business'],
    queryFn: () => getBusiness(businessId),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403) router.push('/users/login')
    },
  })
}
