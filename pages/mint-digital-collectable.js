import { WagmiConfig } from 'wagmi'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import { Web3Modal } from '@web3modal/react'
import dynamic from 'next/dynamic'
import useAuth from '../components/useAuth'
import { useRouter } from 'next/router'
import { Web3Mod } from '../utils/web3'
const DynamicMint = dynamic(() => import('../components/Mint'))

const { wagmiClient, ethereumClient } = Web3Mod.getAllClients()

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
      <Menu />
      <WagmiConfig client={wagmiClient}>
        <DynamicMint />
      </WagmiConfig>

      <Web3Modal
        projectId={Web3Mod.projectId}
        theme="dark"
        accentColor="default"
        ethereumClient={ethereumClient}
      />

      <Footer />
    </>
  )
}
