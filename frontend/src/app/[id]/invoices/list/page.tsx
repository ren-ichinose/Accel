import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'

export default function CreateInvoice({ params }: { params: { id: string } }) {
  return (
    <main>
      <MainHead title="請求書一覧" businessId={params.id} />
    </main>
  )
}
