import QueryInvoice from './_components/atoms/queryInvoice/queryInvoice'

export const metadata = {
  title: '請求書詳細',
  description: '請求書の詳細ページです。',
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string; invoiceId: string }
}) {
  return (
    <QueryInvoice businessId={params.id} invoiceId={params.invoiceId}>
      {children}
    </QueryInvoice>
  )
}
