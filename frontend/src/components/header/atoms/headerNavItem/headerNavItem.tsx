'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import postData from '@/utils/postData'
import { useQueryClient } from '@tanstack/react-query'
import { HiLogout, HiPencil } from 'react-icons/hi'
import { HiWindow } from 'react-icons/hi2'
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

  const createNavItem = (navItemId: string) => {
    switch (navItemId) {
      case 'home':
        return (
          <Link href={href} className={styles.item}>
            <span className={styles.icon}>
              <HiWindow />
            </span>
            {title}
          </Link>
        )
      case 'createInvoice':
        return (
          <Link href={href} className={styles.item}>
            <span className={styles.icon}>
              <HiPencil />
            </span>
            {title}
          </Link>
        )
      case 'logout':
        return (
          <button className={styles.item} type="button" onClick={handleClick}>
            <span className={styles.icon}>
              <HiLogout />
            </span>
            {title}
          </button>
        )
      default:
        return null
    }
  }

  return (
    <li className={styles.container} key={id}>
      {/* {id !== 'logout' && (
        <Link href={href} className={styles.item}>
          <span className={styles.icon}>
            <BiHomeAlt2 />
          </span>
          {title}
        </Link>
      )}
      {id === 'logout' && (
        <button className={styles.item} type="button" onClick={handleClick}>
          {title}
        </button>
      )} */}
      {createNavItem(id)}
    </li>
  )
}
