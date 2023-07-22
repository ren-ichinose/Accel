import MainFootWrapper from '@/components/common/layout/mainFootWrapper/mainFootWrapper'
import PrintInvoiceButton from '../../atoms/printInvoiceButton/printInvoice'

export default function PrintInvoiceFoot({
  handleShow,
  handleUri,
}: {
  handleShow: () => void
  handleUri: (dataUri: string) => void
}) {
  return (
    <MainFootWrapper>
      <PrintInvoiceButton handleShow={handleShow} handleUri={handleUri} />
    </MainFootWrapper>
  )
}
