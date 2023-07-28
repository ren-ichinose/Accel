import MasterRegisterMainContentWrapper from '../../_components/molecules/masterRegisterMainContentWrapper/masterRegisterMainContentWrapper'
import NoteForm from './_components/noteForm/noteForm'

export default function MasterNote({ params }: { params: { id: string } }) {
  return (
    <MasterRegisterMainContentWrapper
      businessId={params.id}
      title="備考欄情報の登録"
    >
      <NoteForm businessId={params.id} />
    </MasterRegisterMainContentWrapper>
  )
}
