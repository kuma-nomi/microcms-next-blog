import Link from 'next/link'
import styles from './header.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles['nav']}>
        <Link href={'/'}>TOP</Link>
        <Link href={'/works'}>WORKS</Link>
      </nav>
    </header>
  )
}
