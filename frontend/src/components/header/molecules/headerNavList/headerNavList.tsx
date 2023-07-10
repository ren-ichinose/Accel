import HeaderNavItem from '../../atoms/headerNavItem/headerNavItem'

export default function HeaderNavList() {
  const navItems = [
    { title: 'ホーム', href: '/:businessId' },
    { title: '請求書作成', href: '/:businessId/invoices/new' },
    { title: '請求書一覧', href: '/:businessId/invoices/list' },
    { title: 'ログアウト', href: '*' },
  ]
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <HeaderNavItem
            key={navItem.title}
            title={navItem.title}
            href={navItem.href}
          />
        ))}
      </ul>
    </nav>
  )
}
