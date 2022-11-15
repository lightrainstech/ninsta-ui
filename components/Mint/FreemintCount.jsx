import { useAccount, useContractRead } from '@web3modal/react'

import React from 'react'
import getConfig from 'next/config'
import nftAbi from '../abi/ninsta.json'

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

  return (
    <>
      <span className="text-brand-500">
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
