import HeaderNavItem from '../../atoms/headerNavItem/headerNavItem'

export default function HeaderNavList() {
  const navItems = [
    { key: 'home', title: 'ホーム', href: '/:businessId' },
    {
      key: 'createInvoice',
      title: '請求書作成',
      href: '/:businessId/invoices/new',
    },
    {
      key: 'invoiceList',
      title: '請求書一覧',
      href: '/:businessId/invoices/list',
    },
    { key: 'logout', title: 'ログアウト', href: '*' },
  ]
  return (
    <nav>
      <ul>
        {navItems.map((navItem) => (
          <HeaderNavItem
            key={navItem.key}
            title={navItem.title}
            href={navItem.href}
          />
        ))}
      </ul>
    </nav>
  )
}
