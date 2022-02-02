import '../styles/bootstrap.min.css'
import '../styles/global.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar/Sidebar'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div className='main-wrapper'>

      <Head>
        <title>Amöba</title>
      </Head>

      <Sidebar />
      <div className='content-wrapper'>
        <Component {...pageProps} />
      </div>

    </div>
  )
}

export default MyApp