import React, { useEffect } from 'react'

import Footer from '../components/Footer'
import Menu from '../components/Menu'
import MintHistory from '../components/MintHistory'
import { NextSeo } from 'next-seo'
import { WagmiConfig } from 'wagmi'
import { Web3Mod } from '../utils/web3'
import { Web3Modal } from '@web3modal/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const { wagmiClient, ethereumClient } = Web3Mod.getAllClients()

export default function Me() {
  const user = useSelector(state => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      toast.error('You need to login to access this page.')
      router.push('/')
    }
  }, [user])

  return (
    <>
      <NextSeo title="My Profile" description="My Ninsta Profile" />
      <Menu />
      <section className="container py-20">
        <div className=" mx-auto prose-invert">
          <h1 className="h1text">
            Welcome, <br />{' '}
            <span className="text-brand-500 break-all">
              {user?.email || 'someone@example.com'}
            </span>
          </h1>
          <WagmiConfig client={wagmiClient}>
            <MintHistory />
          </WagmiConfig>
          <Web3Modal
            projectId={Web3Mod.projectId}
            theme="dark"
            accentColor="default"
            ethereumClient={ethereumClient}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
