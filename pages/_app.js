import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { chains, providers } from '@web3modal/ethereum'
import toast, { Toaster } from 'react-hot-toast'

import { DefaultSeo } from 'next-seo'
import Gtag from '../components/Gtag'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from '../next-seo.config'
import { ToastContainer } from 'react-toastify'
import { Web3Modal } from '@web3modal/react'
// import { persistor, store } from '../components/store'
import getConfig from 'next/config'
import { motion } from 'framer-motion'
import { useStore } from 'react-redux'
import { wrapper } from '../components/store'

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps, router }) {
  const store = useStore(state => state)

  const config = {
    projectId: publicRuntimeConfig.walletconnect,
    theme: 'light',
    accentColor: 'blue',
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [chains.polygon],
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
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <motion.div
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
          <ToastContainer />
        </motion.div>
        <Toaster />
      </PersistGate>
      <Gtag />
      <Web3Modal config={config} />
    </>
  )
}

export default wrapper.withRedux(MyApp)
