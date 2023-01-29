import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/common/footer/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
