import { Noto_Sans_JP } from 'next/font/google'
import QueryProvider from '@/components/common/layout/queryProvider/queryProvider'
import 'src/styles/reset.css'
import 'src/styles/globals.css'

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-notoSansJp',
  display: 'swap',
})

export const metadata = {
  title: 'Accel',
  description:
    'インボイス制度に対応した請求書をWeb上で作成・発行できるサービスです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
