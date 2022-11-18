import React, { useEffect } from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { AiOutlineLoading } from 'react-icons/ai'
import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { ethers } from 'ethers'
import { useSelector } from 'react-redux'
import { saveMeta } from '../../actions'
import { useAccount } from 'wagmi'
import toast from 'react-hot-toast'

import ninsta from '../abi/ninsta.json'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const PayButton = ({ nftInfo }) => {
  const [res, setRes] = React.useState([])
  const [isReady, setIsReady] = React.useState(false)
  const [isSubmit, setIsSubmit] = React.useState(false)
  const user = useSelector(state => state.user)
  const { address } = useAccount()

  const { config } = usePrepareContractWrite({
    address: publicRuntimeConfig.nftContract,
    abi: ninsta,
    functionName: 'directMint',
    args: res,
    overrides: {
      value: ethers.utils.parseEther('0.07')
    }
  })
  const { isSuccess, error, write } = useContractWrite(config)

  useEffect(() => {
    if (isReady) {
      write?.()
    }
  }, [isReady])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Minting in process. Will complete in few minutes')
      setBanner(false)
    }
  }, [isSuccess])

  useEffect(() => {
    if (error) {
      setIsReady(false)
    }
  }, [error])

  const handlePayMint = async () => {
    setIsSubmit(true)
    try {
      const { title, description, royalty, royaltyPer, file } = nftInfo

      if (res.length === 0) {
        const result = await saveMeta(
          {
            file,
            title,
            description,
            royalty,
            royaltyPer,
            handle: 'ninsta',
            wallet: address
          },
          user.accessToken
        )

        const res = result.data.data.data
        setRes([
          res.wallet,
          res.assetUri,
          'ninsta',
          res.royalty,
          res.royaltyPer
        ])

        await new Promise(r => setTimeout(r, 5000))
      }
      setIsReady(true)
    } catch (error) {
      console.log('errorerrorerror', error)
    }
    setIsSubmit(false)
  }

  return (
    <button
      type="button"
      onClick={handlePayMint}
      disabled={isSubmit || isReady}
      className="py-3 px-4 flex flex-row justify-center items-center bttn focus:ring-insta-500 focus:ring-offset-insta-200 text-white w-full transition ease-in duration-200 text-center text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded mt-6">
      {isSubmit || isReady ? (
        <AiOutlineLoading className="mr-1 animate-spin" />
      ) : (
        <RiMoneyDollarCircleLine className="mr-1" />
      )}
      Pay and Mint
    </button>
  )
}

export default PayButton
