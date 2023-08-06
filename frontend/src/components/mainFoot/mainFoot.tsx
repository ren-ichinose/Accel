import Button from '../common/atoms/button/button'
import MainFootWrapper from '../common/layout/mainFootWrapper/mainFootWrapper'

export default function MainFoot({
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
