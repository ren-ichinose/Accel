import MainContentWrapper from '@/components/common/layout/mainContentWrapper/mainContetWrapper'
import Motion from '@/components/common/layout/motion/motion'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import MainBodyContentWrapper from '../_components/layout/mainBodyContentWrapper/mainBodyContentWrapper'
import ContentHead from '../_components/molecules/contentHead/contentHead'
import SelectBusiness from '../_components/molecules/selectMaster/selectMaster'

export default function MasterRegister({ params }: { params: { id: string } }) {
  return (
    <Motion>
      <MainContentWrapper>
        <MainHead title="マスタ登録" businessId={params.id} />
        <MainBodyContentWrapper>
          <ContentHead title="登録するマスタの選択" />
          <SelectBusiness businessId={params.id} />
        </MainBodyContentWrapper>
      </MainContentWrapper>
    </Motion>
  )
}
