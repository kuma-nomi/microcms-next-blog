import styles from './footer.module.scss'
import { SITE_NAME } from '@/utils/constants'

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      &copy;2023 {SITE_NAME} All Rights Reserved.
    </footer>
  )
}
