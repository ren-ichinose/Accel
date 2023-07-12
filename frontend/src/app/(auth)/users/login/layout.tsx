import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: 'ログイン',
  description: 'ログインページです。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
