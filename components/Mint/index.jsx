import React, { Suspense, useState } from 'react'
import { saveAsset, upload } from '../../actions'

import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { useAccount } from '@web3modal/react'
import { useSelector } from 'react-redux'
import Step3 from './Step3'

import FreemintCount from './FreemintCount'

const Step1 = dynamic(() => import('./Step1'), { suspense: true })
const Step2 = dynamic(() => import('./Step2'), { suspense: true })

function Mint() {
  const [minting, setMinting] = useState(1)
  const [nftInfo, setNftInfo] = useState({
    title: '',
    description: '',
    royalty: '0x0000000000000000000000000000000000000000',
    royaltyPer: 0,
    file: '',
    fileLocal: null
  })
  const [isSubmit, setIsSubmit] = useState(false)

  const user = useSelector(state => state.user)
  const { account } = useAccount()

  const validate = () => {
    const { title, file } = nftInfo
    if (title === '' || file === '') return false
    return true
  }

  const handleStep1 = event => {
    if (!validate()) {
      toast.error('Fill all the info')
      return
    }

    setMinting(2)
  }
  const handleActive = value => setMinting(value)

  const handleSubmit = async event => {
    setIsSubmit(true)

    try {
      const { title, description, royalty, royaltyPer, file } = nftInfo

      const result = await upload(
        { file, title, description },
        user.accessToken
      )

      const { assetUri, mimeType, image } = result.data.data

      await saveAsset(
        {
          title,
          description,
          royalty,
          royaltyPer,
          assetUri,
          handle: 'ninsta',
          media: image,
          mediaType: mimeType,
          wallet: account.address
        },
        user.accessToken
      )

      //setMinting(2)
      setIsSubmit(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="container py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2 pr-6">
          <h1 className="font-bold text-3xl md:text-5xl font-serif leading-[1.35]">
            Mint Your{' '}
            <span className="text-green-500">Digital Collectable</span>
          </h1>
          <div className="mt-10 md:mt-40">
            <b className="text-lg mb-2 inline-block">
              <FreemintCount />
            </b>
            <p className="text-gray-500">
              Your wallet can Mint 3 free NFTs using Ninsta for your Instagram,
              after that you will be charged.
            </p>
          </div>
        </div>
        <div className="col-span-4 p-1 md:pl-6">
          {minting < 3 && (
            <Suspense fallback={`Loading...`}>
              <Step1
                {...{
                  minting,
                  nftInfo,
                  setNftInfo,
                  handleStep1,
                  handleActive,
                  isSubmit
                }}
              />
              <Step2
                {...{ minting, nftInfo, handleSubmit, handleActive, isSubmit }}
              />
            </Suspense>
          )}
          {minting === 3 && <Step3 {...{ nftInfo }} />}
        </div>
      </div>
    </div>
  )
}

export default Mint
