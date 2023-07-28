import HoverPopupWrapper from '@/components/common/molecules/hoverPopupWrapper/hoverPopupWrapper'
import useQueryMBusinessDetails from '@/hooks/useQueryMBusinessDetails'
import styles from './popupBusinessDetails.module.css'

export default function PopupBusinessDetails({
  businessId,
  handleChange,
}: {
  businessId: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const { data: businessDetails } = useQueryMBusinessDetails(businessId)

  return businessDetails ? (
    <HoverPopupWrapper>
      <select className={styles.select} onChange={handleChange}>
        <option value="">データを呼び出す</option>
        {businessDetails.map((businessDetail) => (
          <option key={businessDetail.id} value={businessDetail.businessDetail}>
            {businessDetail.name}
          </option>
        ))}
      </select>
    </HoverPopupWrapper>
  ) : null
}
