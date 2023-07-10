import MainContentPadding from '@/components/common/layout/mainContentPadding/mainContentPadding'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import FixedElementOffset from '../../../../components/common/layout/fixedElementOffset/fixedElementOffset'
import CreateInvoiceForm from './_components/createInvoiceForm/createInvoiceForm'

export default function CreateInvoice() {
  return (
    <>
      <MainHead title="請求書作成" businessName="○○商事株式会社" />
      <FixedElementOffset>
        <MainContentPadding>
          <CreateInvoiceForm />
        </MainContentPadding>
      </FixedElementOffset>
    </>
  )
}
