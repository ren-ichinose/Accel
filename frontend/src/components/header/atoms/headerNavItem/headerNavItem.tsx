'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import postData from '@/utils/postData'
import { useQueryClient } from '@tanstack/react-query'
import styles from './headerNavItem.module.css'

export default function HeaderNavItem({
  id,
  title,
  href,
}: {
  id: string
  title: string
  href: string
}) {
  const router = useRouter()
  const cueryClient = useQueryClient()

  const handleClick = async () => {
    cueryClient.removeQueries()
    await postData(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {})
    router.push('/users/login')
  }

  return (
    <li className={styles.container} key={id}>
      {id !== 'logout' && (
        <Link href={href} className={styles.item}>
          {title}
        </Link>
      )}
      {id === 'logout' && (
        <button className={styles.item} type="button" onClick={handleClick}>
          {title}
        </button>
      )}
    </li>
  )
}
