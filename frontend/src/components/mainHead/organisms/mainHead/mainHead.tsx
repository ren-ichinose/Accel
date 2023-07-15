import MainHeadBusinessName from '../../atoms/mainHeadBusinessName/mainHeadBusinessName'
import MainHeadTitle from '../../atoms/mainHeadTitle/mainHeadTitle'
import styles from './mainHead.module.css'

export default function MainHead({ title, businessId }: MainHeadProps) {
  return (
    <div className={styles.container}>
      <MainHeadTitle title={title} />
      <MainHeadBusinessName businessId={businessId} />
    </div>
  )
}

interface MainHeadProps {
  title: string
  businessId: string
}
