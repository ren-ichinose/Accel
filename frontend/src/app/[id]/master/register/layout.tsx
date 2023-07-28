import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'

export const metadata = {
  title: 'マスタ登録',
  description: '各マスタデータの登録ページです',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <MainContentWrapper marginBottom="96px">{children}</MainContentWrapper>
    </main>
  )
}
