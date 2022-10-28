import React, { useEffect, useState } from 'react'

import Home from './steps/Home'
import AssetForm from './steps/AssetForm'
import CollectWallet from './steps/CollectWallet'
import MintingProgress from './steps/MintingProgress'

import { delay } from '../../utils'

const Masthead = () => {
  const [minting, setMinting] = useState(1)
  const [isMinting, setIsMinting] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [nftInfo, setNftInfo] = useState({
    title: '',
    description: '',
    royalty: '',
    royaltyPer: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()
    setIsMinting(true)
    await delay(5000)
    setAnimating(true)
    await delay(1000)
    setMinting(3)
  }

  return (
    <main className="container py-24">
      {minting === 1 && <Home {...{ setMinting }} />}
      {minting === 2 && !isMinting && (
        <AssetForm
          {...{
            minting,
            isMinting,
            animating,
            nftInfo,
            setNftInfo,
            handleSubmit
          }}
        />
      )}
      {minting === 2 && isMinting && (
        <MintingProgress {...{ minting, animating }} />
      )}
      {minting === 3 && <CollectWallet {...{ nftInfo }} />}
    </main>
  )
}

export default Masthead
