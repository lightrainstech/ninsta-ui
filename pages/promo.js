import Footer from '../components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <NextSeo title="Perks and Promos" description="Perks and Promos" />
      <Head>
        <meta
          property="og:url"
          content="https://gleam.io/hbB4n/ninsta-prelaunch"
        />
        <meta property="og:title" content="Ninsta Pre-launch" />
        <meta property="twitter:card" content="summary" />
        <meta property="fb:app_id" content="152351391599356" />
      </Head>
      <Script src="https://widget.gleamjs.io/e.js" strategy="lazyOnload" />

      <Menu />
      <div className="container mt-20">
        <h1 className="h1text mb-16">Perks and Promos</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 justify-center mb-20">
          <div className="col-span-3">
            <a
              class="e-widget no-button"
              href="https://gleam.io/hbB4n/ninsta-prelaunch"
              rel="nofollow">
              Ninsta Pre-launch
            </a>
          </div>

          <div className="col-span-2">
            <p className="mb-8 text-xl">
              {`At Ninsta, we want our customers to be able to mint more and share more. You receive 3 free mints by signing up for Ninsta. In addition, you can also unlock further rewards by completing simple tasks that earn you points. And for those of who want to participate in building Ninsta and earn bigger rewards, please join our discord channel.`}
            </p>
            <h3 className="text-2xl mb-2">Email contact</h3>
            <p className="text-lg mb-2">
              {`You can reach us via email, addressing your concerns if any.
              We’ll make sure to revert to you within a span of 24 hours.`}
            </p>
            <Link href="mailto:hello@ninsta.io">
              <a className="text-brand-500">hello@ninsta.io</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
