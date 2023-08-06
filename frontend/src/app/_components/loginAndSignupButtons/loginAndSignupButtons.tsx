'use client'

import { useRouter } from 'next/navigation'
import Button from '@/components/common/atoms/button/button'
import styles from './loginAndSignupButtons.module.css'

// import { HiPencilAlt } from 'react-icons/hi'
// import Link from 'next/link'

export default function LoginAndSignupButtons() {
  const router = useRouter()
  const handleClickLogin = () => {
    router.push('/users/login')
  }
  const handleClickSignup = () => {
    router.push('/users/register')
  }
  return (
    <div className={styles.buttonWrapper}>
      <Button
        className="welcomeLogin"
        type="button"
        text="ログイン"
        onClick={handleClickLogin}
      />
      <Button
        className="welcomeSignup"
        type="button"
        text="新規登録"
        onClick={handleClickSignup}
      />
    </div>
  )
}
