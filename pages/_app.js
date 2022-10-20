import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SEO from '../next-seo.config'
import { motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <DefaultSeo {...SEO} />
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
      </motion.div>
    </>
  )
}

export default MyApp
