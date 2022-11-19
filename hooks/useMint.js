import { useAccount, useContract, useProvider, useSigner } from 'wagmi'

import React from 'react'
import Web3 from 'web3'
import { ethers } from 'ethers'
import getConfig from 'next/config'
import ninsta from '../components/abi/ninsta.json'
import { saveMeta } from '../actions'
import { useSelector } from 'react-redux'

const { publicRuntimeConfig } = getConfig()

const useMint = () => {
  const signer = useSigner()
  const { address } = useAccount()

  const user = useSelector(state => state.user)
  const provider = useProvider()

  const contract = useContract({
    address: publicRuntimeConfig.nftContract,
    abi: ninsta,
    signerOrProvider: provider
  })

  const payMint = async ({ title, description, royalty, royaltyPer, file }) => {
    // const result = await saveMeta(
    //   {
    //     file,
    //     title,
    //     description,
    //     royalty,
    //     royaltyPer,
    //     handle: 'ninsta',
    //     wallet: account.address
    //   },
    //   user.accessToken
    // )

    let res = {
      user: '635b865b64d0a939580b45a9',
      title: 'Mint Your Digital Collectable',
      description: 'Collectable',
      assetUri:
        'https://ipfs.io/ipfs/QmQxkUmmfvcCWC3qVuCVXvEVQw8ejx3hp7it9EnBY2XERY',
      contractAddress: '0xF68b751A471CDeF5f18Ce88fB62085498f492b8C',
      createdAt: '2022-11-16T03:05:49.100Z',
      description: 'Collectable',
      isMinted: false,
      media: {
        path: 'https://ipfs.io/ipfs/QmWgYQfKCkqQ8ak3R5NTxTyp2rusBbpf6KYG3L7UaHTe2h',
        mimeType: 'image/jpeg'
      },
      royalty: '0x0000000000000000000000000000000000000000',
      royaltyPer: 0,
      title: 'Mint Your Digital Collectable',
      updatedAt: '2022-11-16T03:05:49.100Z',
      user: '635b865b64d0a939580b45a9',
      wallet: '0xEC1E53eC466F0823848ba46e0a6CB35b8efDdE26'
    }

    //const res = result.data.data.data

    console.log(contract)

    await contract.directMint(
      res.wallet,
      res.assetUri,
      'ninsta',
      res.royalty,
      res.royaltyPer,
      {
        from: address,
        value: ethers.utils.parseEther('0.07')
      }
    )
  }

  return { payMint }
}

export default useMint
