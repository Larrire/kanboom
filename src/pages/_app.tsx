import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/template.css'
import '@/styles/index.scss'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Kanboom</title>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
