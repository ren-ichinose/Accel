import 'src/styles/reset.css'
import 'src/styles/globals.css'
import QueryUser from '../_components/queryUser'

export const metadata = {
  title: '事業者選択',
  description: '事業者選択ページです。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <QueryUser>{children}</QueryUser>
}
