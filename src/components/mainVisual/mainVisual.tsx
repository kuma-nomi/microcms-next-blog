import Image from 'next/image'
import styles from './mainVisual.module.scss'
import { SITE_NAME } from '@/utils/constants'

type Props = {
  iconSrc: string
}

export const MainVisual: React.FC<Props> = ({ iconSrc }) => {
  return (
    <div className={styles['top-visual']}>
      <h1>{SITE_NAME}</h1>
      <div className={styles['profile-icon']}>
        <Image src={iconSrc} alt="kumanomi's icon" fill />
      </div>
    </div>
  )
}
