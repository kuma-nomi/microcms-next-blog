import Image from 'next/image'
import Link from 'next/link'
import styles from './worksList.module.scss'
import type { Work } from '@/types/works'

type Props = {
  works: Work[]
}

export const WorksList: React.FC<Props> = ({ works }) => {
  return (
    <ul className={styles['works-list']}>
      {works?.map((work) => (
        <li key={work.id} className={styles['list-item']}>
          <Link href={`/works/${work.id}`}>
            <div className={styles['thumbnail']}>
              <Image
                src={work.thumbnail.url}
                alt={work.title}
                fill
                className={styles['image']}
              />
            </div>
            <p className={styles['title']}>{work.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
