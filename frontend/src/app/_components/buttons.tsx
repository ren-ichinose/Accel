'use client'

import Link from 'next/link'
import Button from '@/components/common/atoms/button/button'
import { HiPencilAlt } from 'react-icons/hi'
import styles from './root.module.css'

export default function Buttons() {
  const handleClickLogin = () => {
    console.log('ログインボタンがクリックされました。')
  }
  const handleClickSignup = () => {
    console.log('新規登録ボタンがクリックされました。')
  }
  return (
    <>
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
      <Link href="/users/login" className={styles.link}>
        ゲストモードでログインはこちら
        <span className={styles.iconPencil}>
          <HiPencilAlt />
        </span>
      </Link>
    </>
  )
}
