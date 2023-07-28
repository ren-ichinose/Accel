// import Link from 'next/link'
import Link from 'next/link'
import {
  // HiOutlineFingerPrint,
  // HiOutlineLibrary,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi'
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
      {/* <div className={styles.itemContainer}>
        <p>
          <HiOutlineLibrary className={styles.icon} />
          支払先情報
        </p>
        <p>
          支払先情報を登録することで請求書の作成時に呼び出すことができます。
        </p>
      </div>
      <div className={styles.itemContainer}>
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
