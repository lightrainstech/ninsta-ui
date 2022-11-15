import React from 'react'
import { useContract } from '@web3modal/react'
import ninsta from '../components/abi/ninsta.json'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const useMint = () => {
  const { contract, isReady } = useContract({
    address: publicRuntimeConfig.nftContract,
    abi: ninsta
  })
  const payMint = data => {
    console.log(contract, data)
  }

  return { payMint }
}

export default useMint
