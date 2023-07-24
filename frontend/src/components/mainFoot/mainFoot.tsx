import Button from '../common/atoms/button/button'
import MainFootWrapper from '../common/layout/mainFootWrapper/mainFootWrapper'

export default function MainFoot({
  cancelButtonOnClick,
}: {
  cancelButtonOnClick: () => void
}) {
  return (
    <MainFootWrapper>
      <Button
        className="mainFootCancel"
        type="button"
        text="リセット"
        onClick={cancelButtonOnClick}
      />
      <Button className="mainFootSubmit" type="submit" text="保存" />
    </MainFootWrapper>
  )
}
