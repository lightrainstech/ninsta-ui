import Footer from '../components/Footer'
import Masthead from '../components/Home/Masthead'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Add NFTs to your Instagram" />
      <div className="flex flex-col items-center justify-between bg-black bg-cover md:bg-[url(/bgnew.png)] bg-no-repeat bg-right bg-opacity-60">
        <Menu />
        <Masthead />
        <Footer />
      </div>
    </>
  )
}
