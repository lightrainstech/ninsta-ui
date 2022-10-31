import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="How to add Free NFT to Instagram"
        description="How to add Free NFT to your Instagram account"
      />
      <Menu />
      <section className="container py-20">
        <div className="prose prose-lg mx-auto max-w-screen-md prose-invert">
          <h1 className="leading-relaxed text-center">
            How to add Free NFT to Instagram
          </h1>
          <p>
            Instagram recently added support for Digital Collectibles aka NFTs
          </p>
          <p>
            Today, development on the blockchains continues to be popular;
            however, development using cryptocurrency market data is becoming
            the new crypto gold rush. Regardless if you are a cryptocurrency
            trader, speculator, developer, or someone interested in conducting
            research within cryptocurrency, there are tons of APIs to choose
            from.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
