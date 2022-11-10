import { chains, providers } from '@web3modal/ethereum'

import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import { Web3Modal } from '@web3modal/react'
import dynamic from 'next/dynamic'
import getConfig from 'next/config'

const DynamicMint = dynamic(() => import('../components/Mint'))
const { publicRuntimeConfig } = getConfig()

export default function Home() {
  const config = {
    projectId: publicRuntimeConfig.walletconnect,
    theme: 'dark',
    accentColor: 'magenta',
    ethereum: {
      appName: 'web3Modal',
      autoConnect: true,
      chains: [
        //chains.polygon
        chains.polygonMumbai
      ],
      providers: [
        providers.walletConnectProvider({
          projectId: publicRuntimeConfig.walletconnect
        })
      ]
    }
  }
  return (
    <>
      <NextSeo
        title="Mint Digital Collectable"
        description="Upload the image you want to convert to Digital Collectable"
      />
      <div className="bg-[#100E1A]">
        <Menu />
        <DynamicMint />
        <Web3Modal config={config} />
        <Footer />
      </div>
    </>
  )
}
