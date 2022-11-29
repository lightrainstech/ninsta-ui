import '../styles/globals.css'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import { DefaultSeo } from 'next-seo'
import Favicons from '../components/Favicons'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import SEO from '../next-seo.config'
import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'
// import { persistor, store } from '../components/store'
import { useStore } from 'react-redux'
import { wrapper } from '../components/store'

const DynamicGtag = dynamic(() => import('../components/Gtag'))

function MyApp({ Component, pageProps, router }) {
  const store = useStore(state => state)

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
        <Favicons />
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
        <Toaster
          toastOptions={{
            style: {
              borderRadius: '10px',
              background: '#100E1A',
              color: '#fff'
            }
          }}
        />
      </PersistGate>
      <DynamicGtag />
    </>
  )
}

export default wrapper.withRedux(MyApp)
