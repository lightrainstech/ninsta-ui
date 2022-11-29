import Features from '../../components/Collections/Features'
import Footer from '../../components/Footer'
import Latest from '../../components/Collections/Latest'
import Masthead from '../../components/Collections/Masthead'
import Menu from '../../components/Menu'
import { NextSeo } from 'next-seo'

export default function Collections() {
  return (
    <>
      <NextSeo
        title="Ninsta Collections"
        description="Ninsta Collections are the best way for you as a content creator or artist to enter the world of Digital Collectibles."
      />
      <Menu />
      <section className="container py-20">
        <h1 className="h1text">Ninsta Collections</h1>
        <h2 className="text-xl md:text-3xl leading-relaxed text-center text-medium mt-4 mb-12 w-full md:w-[700px] mx-auto">
          Ninsta Collections are the best way for you as a creator to enter the
          world of Digital Collectibles.
        </h2>
        <Latest />
        <Features />
        <Masthead />
      </section>
      <Footer />
    </>
  )
}
