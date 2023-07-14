import Logo from '../../atoms/logo/logo'
import HeaderNavList from '../../molecules/headerNavList/headerNavList'
import styles from './header.module.css'

export default function Header({ busunessId }: { busunessId: string }) {
  return (
    <header className={styles.container}>
      <Logo busunessId={busunessId} />
      <HeaderNavList busunessId={busunessId} />
    </header>
  )
}
