import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: '新規登録',
  description: 'ユーザー登録ページです。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
