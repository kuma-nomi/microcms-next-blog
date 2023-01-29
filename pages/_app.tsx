import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Footer } from '@/components/common/footer/footer'
import { Header } from '@/components/common/header/header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
