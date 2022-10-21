import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import { DefaultSeo } from 'next-seo'
import Grag from '../components/Gtag'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from '../next-seo.config'
import { ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'
import { useStore } from 'react-redux'
import { wrapper } from '../components/store'

// import { persistor, store } from '../components/store'

function MyApp({ Component, pageProps, router }) {
  const store = useStore(state => state)
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
      </PersistGate>
      <Grag />
    </>
  )
}

export default wrapper.withRedux(MyApp)
