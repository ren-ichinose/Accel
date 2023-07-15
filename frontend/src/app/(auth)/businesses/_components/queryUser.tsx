'use client'

import useQueryUser from '@/hooks/useQueryUser'

export default function QueryUser({ children }: { children: React.ReactNode }) {
  const { isSuccess } = useQueryUser()

  return isSuccess ? <div>{children}</div> : null
}
