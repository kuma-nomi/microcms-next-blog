import type { InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { client } from '@/libs/client'
import type { BlogList } from '@/types/blog'

export const getStaticProps = async () => {
  const data: BlogList = await client.get({ endpoint: 'blog' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
}) => {
  console.log(blogs)
  return (
    <div>
      <ul>
        {blogs?.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <span>{blog.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
