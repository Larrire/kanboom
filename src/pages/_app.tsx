'use client'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import '@/styles/template.css'
import '@/styles/globals.css'
import Head from 'next/head'

import './kanban/styles.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return <>
    <Head>
      <title>Kanboom</title>
    </Head>
    <Component {...pageProps} />
  </>
}
