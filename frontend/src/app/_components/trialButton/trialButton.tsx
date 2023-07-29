'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiShieldCheck } from 'react-icons/hi'
import LoadingGrid from '@/components/common/molecules/loadingGrid/loadingGrid'
import postData from '@/utils/postData'
import styles from './trialButton.module.css'

export default function TrialButton() {
  const router = useRouter()
  const [IsLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    try {
      const data = {
        loginId: 'trial039',
        password: 'trial039',
      }
      setIsLoading(true)
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data)
      router.push('/businesses/select')
    } catch (error: any) {
      setIsLoading(false)
      throw new Error('サーバーとの通信に失敗しました')
    }
  }
  return (
    <>
      <button type="button" className={styles.button} onClick={handleClick}>
        登録せずに使ってみる
        <HiShieldCheck className={styles.icon} />
      </button>
      {IsLoading && (
        <div className={styles.wrapper}>
          <LoadingGrid />
        </div>
      )}
    </>
  )
}
