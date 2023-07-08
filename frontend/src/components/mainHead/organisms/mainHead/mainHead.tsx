import MainHeadBusinessName from '../../atoms/mainHeadBusinessName/mainHeadBusinessName'
import MainHeadTitle from '../../atoms/mainHeadTitle/mainHeadTitle'
import styles from './mainHead.module.css'

export default function MainHead({ title, businessName }: MainHeadProps) {
  return (
    <div className={styles.container}>
      <MainHeadTitle title={title} />
      <MainHeadBusinessName businessName={businessName} />
    </div>
  )
}

interface MainHeadProps {
  title: string
  businessName: string
}
