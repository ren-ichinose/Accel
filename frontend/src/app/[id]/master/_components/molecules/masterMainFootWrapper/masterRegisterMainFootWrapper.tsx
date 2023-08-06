import Button from '@/components/common/atoms/button/button'
import MainFootWrapper from '@/components/common/layout/mainFootWrapper/mainFootWrapper'

export default function MasterRegisterMainFootWrapper({
  handleReturn,
}: {
  handleReturn: () => void
}) {
  return (
    <MainFootWrapper>
      <Button
        className="mainFootCancel"
        type="button"
        text="戻る"
        onClick={handleReturn}
      />
      <Button className="mainFootSubmit" type="submit" text="保存" />
    </MainFootWrapper>
  )
}
