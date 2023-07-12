import Button from '@/components/common/atoms/button/button'
import AuthFood from '../../_components/auth/atoms/formFood/authFood'
import AuthHead from '../../_components/auth/molecules/authHead/authHead'
import SelectBusiness from '../../_components/auth/molecules/selectBusiness/selectBusiness'

export default function Select() {
  return (
    <>
      <AuthHead title="事業者選択" className="select" />
      <SelectBusiness />
      <Button className="authSubmid" type="submit" text="決定" />
      <AuthFood href="/businesses/register" text="事業者の新規登録はこちら" />
    </>
  )
}
