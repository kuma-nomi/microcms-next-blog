import NextHead from 'next/head'
import { SITE_NAME } from '@/utils/constants'

export const Head: React.FC = () => {
  return (
    <NextHead>
      <link rel='icon' href='/favicon.ico' />
      <title>{SITE_NAME}</title>
    </NextHead>
  )
}
