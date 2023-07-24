import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'
import Motion from '@/components/common/layout/motion/motion'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import PrintInvoiceFootAndModal from './_components/molecules/printInvoiceFootAndModal/printInvoiceFootAndModal'

export default function ShowInvoice({
  params,
}: {
  params: { id: string; invoiceId: string }
}) {
  return (
    <Motion>
      <MainContentWrapper marginBottom="96px">
        <MainHead title="請求書の詳細" businessId={params.id} />
        <PrintInvoiceFootAndModal />
      </MainContentWrapper>
    </Motion>
  )
}
