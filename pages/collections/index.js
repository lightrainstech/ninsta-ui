import Footer from '../../components/Footer'
import Latest from './Latest'
import Masthead from './Masthead'
import Menu from '../../components/Menu'
import { NextSeo } from 'next-seo'

export default function Collections() {
  return (
    <>
      <NextSeo
        title="How to add Free NFT to Instagram"
        description="How to add Free NFT to your Instagram account"
      />
      <Menu />
      <section className="container py-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-center font-serif">
          Ninsta Collections
        </h1>
        <h2 className="text-xl md:text-3xl leading-relaxed text-center text-medium mt-4 mb-12 w-full md:w-[700px] mx-auto">
          Ninsta Collections are the best way for you as a creator to enter the
          world of Digital Collectibles.
        </h2>
        <Latest />
        <Masthead />
      </section>
      <Footer />
    </>
  )
}
