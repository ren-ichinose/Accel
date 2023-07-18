import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import HomeContent from './_components/homeContent/homeContent'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main>
      <MainHead title="ホーム" businessId={params.id} />
      <HomeContent businessId={params.id} />
    </main>
  )
}
