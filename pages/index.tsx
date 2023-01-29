import type { InferGetStaticPropsType, NextPage } from 'next'

import { TextLink } from '@/components/common/textLink/textLink'
import { WorksList } from '@/components/common/worksList/worksList'
import { MainVisual } from '@/components/top/mainVisual/mainVisual'
import { client } from '@/libs/client'
import type { Profile } from '@/types/profile'
import type { WorksList as WorkListType } from '@/types/works'

export const getStaticProps = async () => {
  const worksList: WorkListType = await client.get({
    endpoint: 'works',
    queries: { limit: 2 },
  })
  const profile: Profile = await client.get({ endpoint: 'profile' })

  return {
    props: {
      works: worksList.contents,
      profile,
    },
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  works,
  profile,
}) => {
  return (
    <main>
      <MainVisual iconSrc={profile.image.url} />
      <div className='max-w-5xl m-auto px-6'>
        <section className='text-center mb-24'>
          <h2 className='text-4xl mb-9'>profile</h2>
          <p className='text-base leading-8'>{profile?.detail}</p>
        </section>
        <section className='mb-24'>
          <h2 className='text-4xl text-center mb-9'>works</h2>
          <WorksList works={works} />
          <TextLink
            href='/works'
            label='view more'
            className='text-center mt-10'
          />
        </section>
      </div>
    </main>
  )
}

export default Home
