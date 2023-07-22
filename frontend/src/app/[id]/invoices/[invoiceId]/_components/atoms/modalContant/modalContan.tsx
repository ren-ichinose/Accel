import Motion from '@/components/common/layout/motion/motion'
import styles from './modalContant.module.css'

export default function ModalContant({
  handleHide,
  uri = undefined,
}: {
  handleHide: () => void
  uri?: string
}) {
  return (
    <Motion>
      <div className={styles.wrapper}>
        <iframe
          id="invoice"
          title="invoice"
          style={{ width: '72%', height: '72%' }}
          src={uri}
        />
        <button type="button" className={styles.button} onClick={handleHide}>
          閉じる
        </button>
      </div>
    </Motion>
  )
}
