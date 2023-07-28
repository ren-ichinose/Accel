import { useQuery } from '@tanstack/react-query'
import { MNote } from '@/interfaces/main.interface'
import getData from '@/utils/getData'

export default function useQueryMNote(businessId: string) {
  const getMNote = async (id: string) => {
    const data: MNote[] = await getData(
      `${process.env.NEXT_PUBLIC_API_URL}/business/${id}/m-note`
    )
    return data
  }

  return useQuery<MNote[], Error>({
    queryKey: ['mNote'],
    queryFn: () => getMNote(businessId),
    onError: (err: any) => {
      if (err.status === 401 || err.status === 403)
        throw new Error('備考欄マスタの取得ができませんでした。')
    },
  })
}
