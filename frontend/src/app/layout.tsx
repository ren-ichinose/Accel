import { Noto_Sans_JP } from 'next/font/google'
import 'src/styles/reset.css'
import 'src/styles/globals.css'

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-notoSansJp',
  display: 'swap',
})

export const metadata = {
  title: 'my-first-app',
  description:
    '取引書類の作成業務から経理・会計業務までを一元管理できる、統合的なソリューションを提供します。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJp.className}>{children}</body>
    </html>
  )
}
