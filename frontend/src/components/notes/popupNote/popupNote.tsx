import HoverPopupWrapper from '@/components/common/molecules/hoverPopupWrapper/hoverPopupWrapper'
import useQueryMNote from '@/hooks/useQueryMNote'
import styles from './popupNote.module.css'

export default function PopupNote({
  businessId,
  handleChange,
}: {
  businessId: string
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}) {
  const { data: notes } = useQueryMNote(businessId)

  return notes ? (
    <HoverPopupWrapper>
      <select className={styles.select} onChange={handleChange}>
        <option value="">データを呼び出す</option>
        {notes.map((note) => (
          <option key={note.id} value={note.note}>
            {note.name}
          </option>
        ))}
      </select>
    </HoverPopupWrapper>
  ) : null
}
