import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'

import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import { Web3Modal } from '@web3modal/react'
import dynamic from 'next/dynamic'
import getConfig from 'next/config'
import useAuth from '../components/useAuth'
import { useRouter } from 'next/router'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'

const DynamicMint = dynamic(() => import('../components/Mint'))
const { publicRuntimeConfig } = getConfig()

const projectId = publicRuntimeConfig.walletconnect
const chains = [
  //chain.polygon,
  chain.polygonMumbai
]

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId })
])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: 'web3Moda', chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function Home({ props }) {
  const isAuthenticate = useAuth()
  const router = useRouter()

  if (isAuthenticate !== null && isAuthenticate === false) {
    router.push('/')
  }

  return (
    <>
      <NextSeo
        title="Mint Digital Collectable"
        description="Upload the image you want to convert to Digital Collectable"
      />
      <div className="bg-[#100E1A]">
        <Menu />
        <WagmiConfig client={wagmiClient}>
          <DynamicMint />
        </WagmiConfig>

        <Web3Modal
          projectId={projectId}
          theme="dark"
          accentColor="default"
          ethereumClient={ethereumClient}
        />

        <Footer />
      </div>
    </>
  )
}
