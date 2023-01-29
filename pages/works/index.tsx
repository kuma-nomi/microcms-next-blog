import type { InferGetStaticPropsType, NextPage } from 'next'

import { WorksList } from '@/components/common/worksList/worksList'
import { client } from '@/libs/client'
import styles from '@/styles/works.module.scss'
import type { WorksList as WorkListType } from '@/types/works'

export const getStaticProps = async () => {
  const worksList: WorkListType = await client.get({ endpoint: 'works' })

  return {
    props: {
      works: worksList.contents,
    },
  }
}

const Works: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
}) => {
  return (
    <main>
      <h1 className={styles['title']}>works</h1>
      <div className='max-w-5xl m-auto px-6'>
        <section className='mb-24'>
          <WorksList works={works} />
        </section>
      </div>
    </main>
  )
}

export default Works
