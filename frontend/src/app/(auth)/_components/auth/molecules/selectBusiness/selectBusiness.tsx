'use client'

import { useEffect, useState } from 'react'
import getData from '@/utils/getData'
import { Control, UseFormRegister, useWatch } from 'react-hook-form'
import styles from './selectBusiness.module.css'

export default function SelectBusiness({
  register,
  control,
}: {
  register: UseFormRegister<{ businessId: string }>
  control: Control<
    {
      businessId: string
    },
    any
  >
}) {
  const [businessList, setBusinessList] = useState<
    { id: string; businessName: string }[]
  >([])

  const watchBusinessId = useWatch({ control, name: 'businessId' })

  const createClassName = (businessId: string) => {
    if (businessId === watchBusinessId) {
      return `${styles.selected} ${styles.label}`
    }
    return styles.label
  }

  useEffect(() => {
    const getBusinessAll = async (): Promise<void> => {
      const data = await getData(`${process.env.NEXT_PUBLIC_API_URL}/business`)
      setBusinessList(data)
    }
    getBusinessAll()
  }, [])

  return (
    <div className={styles.container}>
      {businessList.map((business) => (
        <div key={business.id}>
          <label className={createClassName(business.id)} htmlFor={business.id}>
            <input
              type="radio"
              value={business.id}
              id={business.id}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('businessId')}
            />
            {business.businessName}
          </label>
        </div>
      ))}
    </div>
  )
}
