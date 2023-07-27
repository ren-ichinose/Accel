import React from 'react'
import Motion from '@/components/common/layout/motion/motion'
import MainHead from '@/components/mainHead/organisms/mainHead/mainHead'

export default function MasterBusinessDetail({
  params,
}: {
  params: { id: string }
}) {
  return (
    <Motion>
      <MainHead title="事業者情報マスタの登録" businessId={params.id} />
      <div>MasterBusinessDetail</div>
    </Motion>
  )
}
