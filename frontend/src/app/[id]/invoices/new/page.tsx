import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'
import Motion from '@/components/common/layout/motion/motion'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import CreateInvoiceForm from './_components/createInvoiceForm/createInvoiceForm'

export default function CreateInvoice({ params }: { params: { id: string } }) {
  return (
    <Motion>
      <MainHead title="請求書作成" businessId={params.id} />
      <MainContentWrapper marginBottom="96px">
        <CreateInvoiceForm params={params} />
      </MainContentWrapper>
    </Motion>
  )
}
