import Logo from '../../atoms/logo/logo'
import HeaderNavList from '../../molecules/headerNavList/headerNavList'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <Logo />
      <HeaderNavList />
    </header>
  )
}
