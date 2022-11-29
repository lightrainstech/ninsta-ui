import React, { useEffect } from 'react'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'

import { AiOutlineLoading } from 'react-icons/ai'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { ethers } from 'ethers'
import getConfig from 'next/config'
import ninsta from '../abi/ninsta.json'
import { saveMeta, updateAsset } from '../../actions'
import toast from 'react-hot-toast'
import { useAccount } from 'wagmi'
import { useSelector } from 'react-redux'
import { useWeb3Modal } from '@web3modal/react'

const { publicRuntimeConfig } = getConfig()

const PayButton = ({
  nftInfo,
  setBanner = () => {},
  buttonStyles = 'py-3 px-4 items-center bttn focus:ring-insta-500 focus:ring-offset-insta-200 text-white w-full transition ease-in duration-200 text-center text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded mt-6',
  buttonText = 'Pay & Mint',
  retry = false
}) => {
  const [res, setRes] = React.useState([])
  const [nftData, setNftData] = React.useState(null)
  const [isReady, setIsReady] = React.useState(false)
  const [isSubmit, setIsSubmit] = React.useState(false)
  const user = useSelector(state => state.user)
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()

  const { config } = usePrepareContractWrite({
    address: publicRuntimeConfig.nftContract,
    abi: ninsta,
    functionName: 'directMint',
    args: res,
    overrides: {
      value: ethers.utils.parseEther('0.07')
    }
  })

  const { data, isSuccess, error, write } = useContractWrite(config)

  useEffect(() => {
    if (isReady) {
      write?.()
    }
  }, [isReady])

  useEffect(() => {
    if (isSuccess) {
      toast.success('Minting in process. Will complete in few minutes')
    }
  }, [isSuccess])

  useEffect(() => {
    if (data) {
      data
        .wait()
        .then(result => {
          const transfer = result.logs.filter(value => value.data === '0x')
          if (transfer.length > 0) {
            const tokenId = parseInt(transfer[0].topics[3], 16)
            updateAsset({ tokenId, docId: nftData._id }, user.accessToken)
              .then(res => {
                console.log(res)
                window.location.reload()
              })
              .catch(e => console.log)
          }
          setBanner(false)
        })
        .catch(e => console.log(e))
    }
  }, [data])

  useEffect(() => {
    if (error) {
      setIsReady(false)
    }
  }, [error])

  const handlePayMint = async () => {
    setIsSubmit(true)

    try {
      const { title, description, royalty, royaltyPer, file } = nftInfo

      if (!isConnected) {
        open()
      }

      if (res.length === 0) {
        if (!retry) {
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

          res = result.data.data.data
          setNftData(res)
          setRes([
            res.wallet,
            res.assetUri,
            'ninsta',
            res.royalty,
            res.royaltyPer
          ])
        } else {
          setRes([
            nftInfo.wallet,
            nftInfo.assetUri,
            'ninsta',
            nftInfo.royalty,
            nftInfo.royaltyPer
          ])
        }

        await new Promise(r => setTimeout(r, 5000))
      }
      setIsReady(true)
    } catch (error) {
      console.log('err', error)
      toast.error(error.response.data.response.message)
    }
    setIsSubmit(false)
  }

  return (
    <button
      type="button"
      onClick={handlePayMint}
      disabled={isSubmit || isReady}
      className={`flex flex-row justify-center items-center ${buttonStyles}`}>
      {isSubmit || isReady ? (
        <AiOutlineLoading className="mr-1 animate-spin" />
      ) : (
        <RiMoneyDollarCircleLine className="mr-1" />
      )}
      <p>{buttonText}</p>
    </button>
  )
}

export default PayButton
