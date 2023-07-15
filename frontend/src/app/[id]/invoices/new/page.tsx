import MainContentPadding from '@/components/common/layout/mainContentPadding/mainContentPadding'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import FixedElementOffset from '../../../../components/common/layout/fixedElementOffset/fixedElementOffset'
import CreateInvoiceForm from './_components/createInvoiceForm/createInvoiceForm'

export default function CreateInvoice({ params }: { params: { id: string } }) {
  return (
    <>
      <MainHead title="請求書作成" businessId={params.id} />
      <FixedElementOffset>
        <MainContentPadding>
          <CreateInvoiceForm params={params} />
        </MainContentPadding>
      </FixedElementOffset>
    </>
  )
}
