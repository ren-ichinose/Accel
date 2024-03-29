import 'src/styles/reset.css'
import 'src/styles/globals.css'
import FixedElementOffset from '@/components/common/layout/fixedElementOffset/fixedElementOffset'
import Header from '@/components/header/organismss/header/header'
import QueryBusiness from './_components/queryBusiness'

export const metadata = {
  title: 'ホーム',
  description: 'ホームページです',
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  return (
    <QueryBusiness businessId={params.id}>
      <Header businessId={params.id} />
      <FixedElementOffset>{children}</FixedElementOffset>
    </QueryBusiness>
  )
}
