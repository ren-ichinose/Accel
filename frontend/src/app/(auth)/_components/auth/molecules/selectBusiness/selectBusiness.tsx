import styles from './selectBusiness.module.css'

const businessList = [
  {
    id: 'businessId01',
    name: '○○商事株式会社',
  },
  {
    id: 'businessId02',
    name: '株式会社○○デザイン',
  },
  {
    id: 'businessId03',
    name: '○○コンサルティング株式会社',
  },
]

export default function SelectBusiness() {
  return (
    <div className={styles.container}>
      {businessList.map((business) => (
        <div key={business.id}>
          <label className={styles.label} htmlFor={business.id}>
            <input type="radio" value={business.id} id={business.id} />
            {business.name}
          </label>
        </div>
      ))}
    </div>
  )
}
