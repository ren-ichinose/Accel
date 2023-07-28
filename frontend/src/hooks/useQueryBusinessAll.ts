'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { Business } from '@/interfaces/main.interface'
import getData from '@/utils/getData'

export default function useQueryBusinessAll() {
  const router = useRouter()

  const getBusinessAll = async () => {
    const data: Business[] = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/business`
    )
    return data
  }

  return useQuery<Business[], Error>({
    queryKey: ['businessAll'],
    queryFn: () => getBusinessAll(),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403) router.push('/users/login')
    },
  })
}
