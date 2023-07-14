'use client'

import useQueryBusiness from '@/hooks/useQueryBusiness'

export default function QueryBusiness({
  children,
  businessId,
}: {
  children: React.ReactNode
  businessId: string
}) {
  const { isSuccess } = useQueryBusiness(businessId)

  return isSuccess ? <div>{children}</div> : null
}
