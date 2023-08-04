'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { HiLogout, HiOutlineDatabase, HiPencil } from 'react-icons/hi'
import { HiWindow } from 'react-icons/hi2'
import postData from '@/utils/postData'
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
    router.push('/')
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
      case 'masterRegister':
        return (
          <Link href={href} className={styles.item}>
            <span className={styles.icon}>
              <HiOutlineDatabase />
            </span>
            {title}
          </Link>
        )
      default:
        return null
    }
  }

  return (
    <li className={styles.container} key={id}>
      {createNavItem(id)}
    </li>
  )
}
