import HeaderNavItem from '../../atoms/headerNavItem/headerNavItem'
import styles from './headerNavList.module.css'

export default function HeaderNavList({ busunessId }: { busunessId: string }) {
  const navItems = [
    { id: 'home', title: 'ホーム', href: `/${busunessId}` },
    {
      id: 'createInvoice',
      title: '請求書作成',
      href: `/${busunessId}/invoices/new`,
    },
    // {
    //   id: 'invoiceList',
    //   title: '請求書一覧',
    //   href: `/${busunessId}/invoices/list`,
    // },
    { id: 'logout', title: 'ログアウト', href: '*' },
  ]
  return (
    <nav className={styles.container}>
      <ul>
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
