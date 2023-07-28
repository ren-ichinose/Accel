import HeaderNavItem from '../../atoms/headerNavItem/headerNavItem'
import styles from './headerNavList.module.css'

export default function HeaderNavList({ businessId }: { businessId: string }) {
  const navItems = [
    { id: 'home', title: 'ホーム', href: `/${businessId}` },
    {
      id: 'createInvoice',
      title: '請求書作成',
      href: `/${businessId}/invoices/new`,
    },
    {
      id: 'masterRegister',
      title: 'マスタ登録',
      href: `/${businessId}/master/register`,
    },
    { id: 'logout', title: 'ログアウト', href: '*' },
  ]
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {navItems.map((navItem) => (
          <HeaderNavItem
            key={navItem.id}
            id={navItem.id}
            title={navItem.title}
            href={navItem.href}
          />
        ))}
      </ul>
    </nav>
  )
}
