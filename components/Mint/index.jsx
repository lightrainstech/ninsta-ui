import React, { useEffect, useState } from 'react'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const Step1 = dynamic(() => import('./Step1'), { suspense: true })
const Step2 = dynamic(() => import('./Step2'), { suspense: true })
const Step3 = dynamic(() => import('./Step3'), { suspense: true })

function Mint() {
  const [minting, setMinting] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [nftInfo, setNftInfo] = useState({
    title: '',
    description: '',
    royalty: '',
    royaltyPer: '',
    file: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    setIsMinting(true)
    await delay(5000)
    setAnimating(true)
    await delay(1000)
    setMinting(2)
  }

  return (
    <div className="container py-20">
      <div className="grid grid-cols-6 gap-10">
        <div className="col-span-2 pr-6">
          <h1 className="font-bold text-5xl font-serif leading-[1.35]">
            Mint Your{' '}
            <span className="text-green-500">Digital Collectable</span>
          </h1>
          <div className="mt-40">
            <b className="text-lg mb-2 inline-block">
              <span className="text-green-500">1/3</span> Free NFT
            </b>
            <p className="text-gray-500">
              Your wallet can Mint 3 free NFTs using Ninsta for your Instagram,
              after that you will be charged.
            </p>
          </div>
        </div>
        <div className="col-span-4 pl-6">
          <Suspense fallback={`Loading...`}>
            <Step1
              {...{
                minting,
                isMinting,
                animating,
                nftInfo,
                setNftInfo,
                handleSubmit
              }}
            />
            <Step2 />
            <Step3 />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Mint
