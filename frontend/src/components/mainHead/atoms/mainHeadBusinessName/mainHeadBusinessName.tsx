'use client'

import useQueryBusiness from '@/hooks/useQueryBusiness'
import styles from './mainHeadBusinessName.module.css'

export default function MainHeadBusinessName({
  businessId,
}: MainHeadBusinessNameProprs) {
  const { data: business } = useQueryBusiness(businessId)
  return <p className={styles.businessName}>{business?.businessName}</p>
}

interface MainHeadBusinessNameProprs {
  businessId: string
}
