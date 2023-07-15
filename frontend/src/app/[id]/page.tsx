import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <main>
      <MainHead title="ホーム" businessId={params.id} />
    </main>
  )
}
