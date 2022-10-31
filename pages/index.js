import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

const DynamicMasthead = dynamic(() => import('../components/Home/Masthead'))
const DynamicFooter = dynamic(() => import('../components/Footer'))

export default function Home() {
  return (
    <>
      <NextSeo title="Add NFTs to your Instagram #MintedOnNinsta" />
      <div className="flex flex-col items-center justify-between bg-black bg-cover md:bg-[url(/bgfinal.min.png)] bg-no-repeat bg-right bg-opacity-60">
        <Menu />
        <DynamicMasthead />
        <DynamicFooter />
      </div>
    </>
  )
}
