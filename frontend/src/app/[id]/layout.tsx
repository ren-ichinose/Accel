import Header from '@/components/header/organismss/header/header'
import 'src/styles/reset.css'
import 'src/styles/globals.css'

export const metadata = {
  title: '請求書作成',
  description: '請求書を作成するページです',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
