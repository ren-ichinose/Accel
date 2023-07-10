import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: '請求書一覧',
  description: '作成した請求書のリストをご確認いただけるページです',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>
}
