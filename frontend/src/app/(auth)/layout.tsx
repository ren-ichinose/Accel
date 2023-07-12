import 'src/styles/reset.css'
import 'src/styles/globals.css'
import AuthLayout from './_components/auth/layout/authLayout'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AuthLayout>{children}</AuthLayout>
}
