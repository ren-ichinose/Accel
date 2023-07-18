import CreateInvoiceFormContainer from '@/components/common/layout/createInvoiceFormContainer/createInvoiceFormContainer'
import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import CreateInvoiceForm from './_components/createInvoiceForm/createInvoiceForm'

export default function CreateInvoice({ params }: { params: { id: string } }) {
  return (
    <>
      <MainHead title="請求書作成" businessId={params.id} />
      <MainContentWrapper marginBottom="96px">
        <CreateInvoiceFormContainer>
          <CreateInvoiceForm params={params} />
        </CreateInvoiceFormContainer>
      </MainContentWrapper>
    </>
  )
}
