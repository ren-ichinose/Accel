'use client'

import { Business } from '@/interfaces/main.interface'
import { Control, UseFormRegister, useWatch } from 'react-hook-form'
import styles from './selectBusiness.module.css'

export default function SelectBusiness({
  register,
  control,
  businessList,
}: {
  register: UseFormRegister<{ businessId: string }>
  control: Control<
    {
      businessId: string
    },
    any
  >
  businessList: Business[]
}) {
  const watchBusinessId = useWatch({ control, name: 'businessId' })

  const createClassName = (businessId: string) => {
    if (businessId === watchBusinessId) {
      return `${styles.selected} ${styles.label}`
    }
    return styles.label
  }

  return (
    <div className={styles.container}>
      {businessList &&
        businessList.map((business) => (
          <div key={business.id}>
            <label
              className={createClassName(business.id)}
              htmlFor={business.id}
            >
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
