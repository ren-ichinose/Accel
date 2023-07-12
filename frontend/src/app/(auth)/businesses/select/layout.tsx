import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: '事業者選択',
  description: '事業者選択ページです。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
