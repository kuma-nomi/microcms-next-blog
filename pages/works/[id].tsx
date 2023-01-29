import type {
  InferGetStaticPropsType,
  NextPage,
  GetStaticPropsContext,
} from 'next'

import { WorksVisual } from '@/components/works/worksVisual/worksVisual'
import { client } from '@/libs/client'
import type { Work, WorksList } from '@/types/works'

export const getStaticPaths = async () => {
  const worksList: WorksList = await client.get({ endpoint: 'works' })
  const paths = worksList.contents.map((content) => `/works/${content.id}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>,
) => {
  const { params } = context
  const data: Work = await client.get({
    endpoint: 'works',
    contentId: params?.id,
  })

  return {
    props: {
      work: data,
    },
  }
}

const WorksDetail: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  work,
}) => {
  return (
    <main>
      <WorksVisual thumbnail={work.thumbnail} title={work.title} />
      <div className='max-w-3xl mx-auto mb-24 px-6'>
        <div
          dangerouslySetInnerHTML={{
            __html: work.body,
          }}
          className='rich-text'
        />
      </div>
    </main>
  )
}

export default WorksDetail
