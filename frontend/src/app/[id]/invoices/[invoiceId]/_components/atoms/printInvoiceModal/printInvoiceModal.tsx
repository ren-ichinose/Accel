import ModalContant from '../modalContant/modalContan'
import styles from './printInvoiceModal.module.css'

export default function PrintInvoiceModal({
  isShow,
  handleHide,
  uri = undefined,
}: {
  isShow: boolean
  handleHide: () => void
  uri?: string
}) {
  return isShow ? (
    <div className={styles.wrapper}>
      <ModalContant handleHide={handleHide} uri={uri} />
    </div>
  ) : null
}
