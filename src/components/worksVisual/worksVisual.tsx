import Image from 'next/image'
import styles from './worksVisual.module.scss'
import type { Image as ImageType } from '@/types/common'

type Props = {
  thumbnail: ImageType
  title: string
}

export const WorksVisual: React.FC<Props> = ({ thumbnail, title }) => {
  return (
    <div className={styles['works-visual']}>
      <div className={styles['thumbnail']}>
        <Image
          src={thumbnail.url}
          alt={title}
          fill
          className={styles['image']}
        />
      </div>
      <h1 className={styles['title']}>{title}</h1>
    </div>
  )
}
