import Motion from '@/components/common/layout/motion/motion'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'
import MainBodyContentWrapper from '../../layout/mainBodyContentWrapper/mainBodyContentWrapper'
import ContentHead from '../contentHead/contentHead'

export default function MasterRegisterMainContentWrapper({
  children,
  businessId,
  title,
}: {
  children: React.ReactNode
  businessId: string
  title: string
}) {
  return (
    <Motion>
      <MainHead title="マスタ登録" businessId={businessId} />
      <MainBodyContentWrapper>
        <ContentHead title={title} />
        {children}
      </MainBodyContentWrapper>
    </Motion>
  )
}
