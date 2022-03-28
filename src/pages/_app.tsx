import '../styles/bootstrap.min.css'
import '../styles/global.css'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React, { useState } from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar/Sidebar'
import App from '../components/App/App'
import Header from '../components/Header/Header'

const MyApp = ({ Component, pageProps }: AppProps, ): JSX.Element => {

  const [isLoggedIn, setState] = useState(true)
  
  if (isLoggedIn) {

    return(
      <div className='main-wrapper'>
        <Head>
          <title>Amöba</title>
        </Head>
        <Sidebar />
        <Header />
        <div className='content-wrapper'>
          <Component {...pageProps} />
        </div>
      </div>
    )

  } 
  else {
    return (
      <>
        <Head>
          <title>Amöba</title>
        </Head>

        <App />
      </>
    )
  }
}

export default MyApp