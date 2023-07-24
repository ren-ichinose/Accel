'use client'

import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import useQueryInvoice from '@/hooks/useQueryInvoice'

export default function QueryInvoice({
  children,
  businessId,
  invoiceId,
}: {
  children: React.ReactNode
  businessId: string
  invoiceId: string
}) {
  const { isSuccess, isError } = useQueryInvoice(invoiceId)
  return (
    <>
      {isSuccess && <div>{children}</div>}
      {isError && (
        <MainContentWrapper marginBottom="96px">
          <MainHead title="請求書の詳細" businessId={businessId} />
          <div>請求書のデータを取得することができませんでした。</div>
        </MainContentWrapper>
      )}
    </>
  )
}
