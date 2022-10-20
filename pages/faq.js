import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Frequently-asked questions"
        description="Frequently-asked questions like How to add Free NFT to your Instagram account"
      />
      <Menu />

      <div className="prose prose-lg mx-auto max-w-screen-md prose-invert">
        <Faq />
      </div>
      <Footer />
    </>
  )
}
