import React, { Suspense, useState } from 'react'
import { saveAsset, upload } from '../../actions'

import FreemintCount from './FreemintCount'
import Step3 from './Step3'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { useAccount } from '@web3modal/react'
import { useSelector } from 'react-redux'

const Step1 = dynamic(() => import('./Step1'), { suspense: true })
const Step2 = dynamic(() => import('./Step2'), { suspense: true })

function Mint() {
  const [minting, setMinting] = useState(3)
  const [nftInfo, setNftInfo] = useState({
    title: '',
    description: '',
    royalty: '',
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
      toast.error('Please fill the required fields')
      return
    }
    setMinting(2)
  }
  const handleActive = value => setMinting(value)

  const handleSubmit = async event => {
    setIsSubmit(true)

    try {
      const {
        title,
        description,
        royalty = '0x0000000000000000000000000000000000000000',
        royaltyPer,
        file
      } = nftInfo

      await saveAsset(
        {
          file,
          title,
          description,
          royalty,
          royaltyPer,
          handle: 'ninsta',
          wallet: account.address
        },
        user.accessToken
      )

      setMinting(3)
    } catch (error) {
      // toast.error(
      //   'Unable to Mint, please contact support team for further assistance.'
      // )
      console.log('error', error)
    }
    setIsSubmit(false)
  }

  return (
    <div className="container py-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
        <div className="col-span-2 pr-6">
          <h1 className="font-bold text-3xl md:text-5xl font-serif !leading-[1.3]">
            Mint Your{' '}
            <span className="text-brand-500">Digital Collectable</span>
          </h1>
          <div className="mt-10 md:mt-40">
            <b className="text-lg mb-2 inline-block">
              <FreemintCount />
            </b>
            <h3 className="text-gray-500">
              You can Mint 3 free Digital Collectibles using Ninsta for your
              Instagram.
            </h3>
          </div>
        </div>
        <div className="col-span-4 p-1 md:pl-6">
          {minting < 3 && (
            <Suspense
              fallback={
                <div className="h-full min-w-min flex flex-col items-center justify-center text-gray-600">
                  <p className="mt-3 text-lg">Loading...</p>
                </div>
              }>
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
