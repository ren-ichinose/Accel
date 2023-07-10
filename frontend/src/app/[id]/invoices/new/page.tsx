import MainContentPadding from '@/components/common/layout/mainContentPadding/mainContentPadding'
import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails'
import FinancialSummary from '@/components/financialSummary/financialSummary'
import MainFood from '@/components/mainFood/mainFood'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import Notes from '@/components/notes/notes'
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable'
import FixedElementOffset from '../../../../components/common/layout/fixedElementOffset/fixedElementOffset'

export default function CreateInvoice() {
  return (
    <main>
      <MainHead title="請求書作成" businessName="○○商事株式会社" />
      <FixedElementOffset>
        <MainContentPadding>
          <DocumentDetails />
          <ProductsTable />
          <FinancialSummary />
          <Notes />
          <MainFood />
        </MainContentPadding>
      </FixedElementOffset>
    </main>
  )
}
