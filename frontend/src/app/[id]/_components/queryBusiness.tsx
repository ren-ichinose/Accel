'use client'

import useQueryBusiness from '@/hooks/useQueryBusiness'

export default function QueryBusiness({
  children,
  businessId,
}: {
  children: React.ReactNode
  businessId: string
}) {
  useQueryBusiness(businessId)

  return <div>{children}</div>
}
