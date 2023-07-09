import DocumentDetails from '@/components/documentDetails/organisms/documentDetails/documentDetails'
import FinancialSummary from '@/components/financialSummary/financialSummary'
import ContentMarginBottom from '@/components/layout/contentMarginBottom/contentMarginBottom'
import MainContentPadding from '@/components/layout/mainContentPadding/mainContentPadding'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import Notes from '@/components/notes/notes'
import ProductsTable from '@/components/productsTable/organisms/productsTable/productsTable'
import FixedElementOffset from '../../../../components/layout/fixedElementOffset/fixedElementOffset'

export default function CreateInvoice() {
  return (
    <main>
      <MainHead title="請求書作成" businessName="○○商事株式会社" />
      <FixedElementOffset>
        <MainContentPadding>
          <ContentMarginBottom>
            <DocumentDetails />
          </ContentMarginBottom>
          <ContentMarginBottom>
            <ProductsTable />
          </ContentMarginBottom>
          <ContentMarginBottom>
            <FinancialSummary />
          </ContentMarginBottom>
          <Notes />
        </MainContentPadding>
      </FixedElementOffset>
    </main>
  )
}
