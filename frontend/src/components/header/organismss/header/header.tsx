import { HiMenu } from 'react-icons/hi'
import Logo from '../../atoms/logo/logo'
import HeaderNavList from '../../molecules/headerNavList/headerNavList'
import styles from './header.module.css'

export default function Header({ busunessId }: { busunessId: string }) {
  return (
    <header className={styles.container}>
      <Logo />
      <HiMenu className={styles.menuIcon} />
      <div className={styles.navModal}>
        <HeaderNavList busunessId={busunessId} />
      </div>
    </header>
  )
}
