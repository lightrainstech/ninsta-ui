import '../styles/globals.css'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import { chains, providers } from '@web3modal/ethereum'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from '../next-seo.config'
import { Toaster } from 'react-hot-toast'
import { Web3Modal } from '@web3modal/react'
import dynamic from 'next/dynamic'
// import { persistor, store } from '../components/store'
import getConfig from 'next/config'
import { useStore } from 'react-redux'
import { wrapper } from '../components/store'

const { publicRuntimeConfig } = getConfig()

const DynamicGtag = dynamic(() => import('../components/Gtag'))

function MyApp({ Component, pageProps, router }) {
  const store = useStore(state => state)
  const config = {
    projectId: publicRuntimeConfig.walletconnect,
    theme: 'light',
    accentColor: 'blue',
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [
        //chains.polygon
        chains.polygonMumbai
      ],
      providers: [
        providers.walletConnectProvider({
          projectId: publicRuntimeConfig.walletconnect
        })
      ]
    }
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
      <PersistGate
        persistor={store.__persistor}
        loading={
          <div className="h-screen flex flex-col items-center justify-center text-gray-600">
            <p className="mt-3 text-lg">Loading...</p>
          </div>
        }>
        <LazyMotion features={domAnimation}>
          <m.div
            key={router.route}
            initial="initial"
            animate="animate"
            variants={{
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            }}>
            <Component {...pageProps} />
          </m.div>
        </LazyMotion>
        <Toaster />
      </PersistGate>
      <DynamicGtag />
      <Web3Modal config={config} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
