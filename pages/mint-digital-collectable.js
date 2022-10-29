import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Mint from '../components/Mint'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Mint Digital Collectable" />
      <div className="bg-[#020208]">
        <Menu />
        <Mint />
        <Footer />
      </div>
    </>
  )
}
