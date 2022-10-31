import React from 'react'
import { useContractRead, useAccount } from '@web3modal/react'
import nftAbi from '../abi/nft.json'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const FreemintCount = () => {
  const { account } = useAccount()

  const getFreeMax = useContractRead({
    address: publicRuntimeConfig.nftContract,
    abi: nftAbi,
    functionName: 'getFreeMax'
  })

  const getFreeMinting = useContractRead({
    address: publicRuntimeConfig.nftContract,
    abi: nftAbi,
    functionName: 'getFreeMinting',
    args: [account.address]
  })
  console.log(parseInt(getFreeMinting?.data?.toString()))

  return (
    <>
      <span className="text-green-500">
        {isNaN(parseInt(getFreeMinting?.data?.toString()))
          ? 1
          : parseInt(getFreeMinting?.data?.toString()) + 1}
        /{getFreeMax?.data?.toString()}
      </span>{' '}
      Free NFT
    </>
  )
}

export default FreemintCount
