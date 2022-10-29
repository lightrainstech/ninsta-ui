import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import InstaCard from './InstaCard'
import Link from 'next/link'

function Step2({ minting, nftInfo, setNftInfo, handleSubmit }) {
  const [freeCount, setFreeCount] = useState(1)
  const [royalty, setRoyalty] = useState(false)

  const handleChange = event =>
    setNftInfo({ ...nftInfo, [event.target.name]: event.target.value })

  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps active">
      <div className="pb-10 flex flex-row items-center justify-between space-x-8">
        <span className="number bg-[url(/wallet_closed.svg)] bg-no-repeat" />
        <h3 className="text-2xl font-thin flex-1">Connect your wallet</h3>
        <span>2</span>
      </div>

      <div className="content">
        <div className="flex flex-row items-center justify-start space-x-10">
          <Image src="/MetaMask_Fox.svg" height={80} width={80} alt="" />
          <Image src="/coinbase-logo-icon.svg" height={80} width={80} alt="" />
          <Image src="/MetaMask_Fox.svg" height={80} width={80} alt="" />
        </div>

        <div className="mt-8 flex flex-row space-x-4">
          <p>Dont have a wallet?</p>
          <Link href="/">
            <a className="text-blue-500 cursor-pointer">SET UP WALLET</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Step2
