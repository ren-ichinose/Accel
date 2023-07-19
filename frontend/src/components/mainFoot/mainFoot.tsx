import Button from '../common/atoms/button/button'
import styles from './mainFoot.module.css'

export default function MainFoot() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Button className="mainFootCancel" type="button" text="キャンセル" />
        <Button className="mainFootSubmit" type="submit" text="保存" />
      </div>
    </div>
  )
}