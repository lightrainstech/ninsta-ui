import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const DynamicMint = dynamic(() => import('../components/Mint'))

export default function Home() {
  return (
    <>
      <NextSeo title="Mint Digital Collectable" />
      <div className="bg-[#020208]">
        <Menu />
        <DynamicMint />
        <Footer />
      </div>
    </>
  )
}
