import { useQuery } from '@tanstack/react-query'
import { MBusinessDetails } from '@/interfaces/main.interface'
import getData from '@/utils/getData'

export default function useQueryMBusinessDetails(businessId: string) {
  const getMBusinessDetails = async (id: string) => {
    const data: MBusinessDetails[] = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/business/${id}/m-business-detail`
    )
    return data
  }

  return useQuery<MBusinessDetails[], Error>({
    queryKey: ['mBusinessDetails'],
    queryFn: () => getMBusinessDetails(businessId),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403)
        throw new Error('事業者情報マスタの取得ができませんでした。')
    },
  })
}
