import React, { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi'

import getConfig from 'next/config'
import nftAbi from '../abi/ninsta.json'
import { setRequestMeta } from 'next/dist/server/request-meta'

const { publicRuntimeConfig } = getConfig()

const FreemintCount = () => {
  const { address } = useAccount()
  const [res, setRes] = useState('')

  const getFreeMax = useContractRead({
    address: publicRuntimeConfig.nftContract,
    abi: nftAbi,
    functionName: 'getFreeMax'
  })

  const getFreeMinting = useContractRead({
    address: publicRuntimeConfig.nftContract,
    abi: nftAbi,
    functionName: 'getFreeMinting',
    args: [address]
  })

  useEffect(() => {
    if (getFreeMinting && getFreeMax && getFreeMinting.length > 0) {
      let remain = parseInt(getFreeMinting.data[0].toString())

      if (!getFreeMinting.data[1]) {
        remain = 3
      }
      console.log(parseInt(getFreeMinting.data[0].toString()))
      console.log(parseInt(getFreeMax.data.toString()))
      setRes(`${remain}`)
    } else {
      setRes('3')
    }
  }, [getFreeMinting, getFreeMax])

  return (
    <>
      <span className="text-brand-500 mr-3">{res}</span>
      Free NFT remaining
    </>
  )
}

export default FreemintCount
