import MasterRegisterMainContentWrapper from '../../_components/molecules/masterRegisterMainContentWrapper/masterRegisterMainContentWrapper'
import BusinessDetailForm from './_components/businessDetailsForm/businessDetailsForm'

export default function MasterBusinessDetail({
  params,
}: {
  params: { id: string }
}) {
  return (
    <MasterRegisterMainContentWrapper
      businessId={params.id}
      title="事業者情報の登録"
    >
      <BusinessDetailForm businessId={params.id} />
    </MasterRegisterMainContentWrapper>
  )
}
