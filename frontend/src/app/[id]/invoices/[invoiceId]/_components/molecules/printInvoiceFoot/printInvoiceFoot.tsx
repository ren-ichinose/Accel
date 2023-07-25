import MainFootWrapper from '@/components/common/layout/mainFootWrapper/mainFootWrapper'
import PrintInvoiceButton from '../../atoms/printInvoiceButton/printInvoiceButton'

export default function PrintInvoiceFoot({
  handleShow,
  handleUri,
  invoiceId,
}: {
  handleShow: () => void
  handleUri: (dataUri: string) => void
  invoiceId: string
}) {
  return (
    <MainFootWrapper>
      <PrintInvoiceButton
        handleShow={handleShow}
        handleUri={handleUri}
        invoiceId={invoiceId}
      />
    </MainFootWrapper>
  )
}
