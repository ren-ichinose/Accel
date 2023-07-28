// import Link from 'next/link'
import Link from 'next/link'
import { HiOutlineOfficeBuilding, HiOutlineTag } from 'react-icons/hi'
import styles from './selectMaster.module.css'

export default function SelectBusiness({ businessId }: { businessId: string }) {
  return (
    <div>
      <Link
        className={styles.itemContainer}
        href={`/${businessId}/master/register/business-details`}
      >
        <p>
          <span>
            <HiOutlineOfficeBuilding className={styles.icon} />
          </span>
          事業者情報
        </p>
        <p>
          事業者情報を登録することで請求書の作成時に呼び出すことができます。
        </p>
      </Link>
      <Link
        className={styles.itemContainer}
        href={`/${businessId}/master/register/note`}
      >
        <p>
          <HiOutlineTag className={styles.icon} />
          備考欄情報
        </p>
        <p>
          備考欄情報を登録することで請求書の作成時に呼び出すことができます。
        </p>
      </Link>
      {/* <div className={styles.itemContainer}>
        <p>
          <HiOutlineFingerPrint className={styles.icon} />
          印鑑情報
        </p>
        <p>
          印鑑情報を登録することで作成した請求書を発行する際に使用することができます。
        </p>
      </div> */}
    </div>
  )
}
