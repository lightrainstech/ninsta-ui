import Footer from '../components/Footer'
import Howto from '../components/Howto'
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
        <h1 className="leading-relaxed text-5xl font-bold text-center">
          How to add Free NFT to Instagram
        </h1>
        <Howto />
      </section>
      <Footer />
    </>
  )
}
