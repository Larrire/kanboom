import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'

// import css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@/styles/template.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Kanboom</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
