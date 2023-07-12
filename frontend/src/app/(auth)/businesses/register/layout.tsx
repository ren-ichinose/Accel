import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: '事業者登録',
  description: '事業者登録ページです。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
