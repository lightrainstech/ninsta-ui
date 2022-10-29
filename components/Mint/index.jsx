import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { upload, saveAsset } from '../../actions'
import toast from 'react-hot-toast'

const Step1 = dynamic(() => import('./Step1'), { suspense: true })
const Step2 = dynamic(() => import('./Step2'), { suspense: true })

function Mint() {
  const [minting, setMinting] = useState(2)
  const [nftInfo, setNftInfo] = useState({
    title: '',
    description: '',
    royalty: '',
    royaltyPer: 0,
    file: '',
    fileLocal: null
  })
  const user = useSelector(state => state.user)

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

  const handleSubmit = async event => {
    try {
      const { title, description, royalty, royaltyPer } = nftInfo
      event.preventDefault()

      if (!validate()) {
        toast.error('Fill all the info')
        return
      }
      const result = await upload({ files: nftInfo.file }, user.accessToken)
      await saveAsset(
        {
          title,
          description,
          royalty,
          royaltyPer,
          media: result.data.data.filePath,
          mediaType: result.data.data.mimeType,
          wallet: '0xFd277dF0F425DA6e0ABCEB88BB5056e0a50c0AcF'
        },
        user.accessToken
      )
      setMinting(2)
    } catch (error) {
      console.log('error', error)
    }
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
                nftInfo,
                setNftInfo,
                handleStep1
              }}
            />
            <Step2 {...{ minting, nftInfo, handleSubmit }} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Mint
