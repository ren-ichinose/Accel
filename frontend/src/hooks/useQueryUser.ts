import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { User } from '@/interfaces/main.interface'
import getData from '@/utils/getData'

export default function useQueryUser() {
  const router = useRouter()

  const getUser = async () => {
    const data: User = await getData(`${process.env.NEXT_PUBLIC_API_URL}/user`)
    return data
  }

  return useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: () => getUser(),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403) router.push('/users/login')
    },
  })
}
