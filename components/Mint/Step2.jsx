import { RiArrowDownSLine, RiWallet2Line } from 'react-icons/ri'
import { useAccount, useConnectModal } from '@web3modal/react'
import { AiOutlineLoading } from 'react-icons/ai'

import Image from 'next/image'
import React, { useState } from 'react'
import { truncate } from '../../utils/index'

function Step2({ minting, nftInfo, handleSubmit, handleActive, isSubmit }) {
  const { account, isReady } = useAccount()
  const { open } = useConnectModal()

  return (
    <div
      className={`rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps ${
        minting === 2 && 'active'
      }`}>
      <div className="pb-10 flex flex-row items-center justify-between space-x-4">
        <span className="number">
          <RiWallet2Line size={18} />
        </span>
        <h3 className="text-xl md:text-2xl font-thin flex-1">
          Mint Digital Collectable
        </h3>
        <RiArrowDownSLine
          size={36}
          className="cursor-pointer hover:text-brand-500"
          onClick={() =>
            nftInfo.fileLocal !== null &&
            nftInfo.title !== '' &&
            nftInfo.description !== '' &&
            handleActive(2)
          }
        />
      </div>

      <div className="content pl-0 md:pl-14">
        <div className="flex flex-col md:flex-row gap-6  pb-6">
          <div className="h-full">
            <div className="mb-5">
              {account.isConnected ? (
                <>
                  <p>Connected Wallet</p>
                  <div className="flex justify-between items-center text-white rounded-md py-2 px-3 my-4 border ">
                    <p>{truncate(account.address, 20)}</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-500">
                    Click on Connect Wallet to connect or Create your Crypto
                    Wallet
                  </p>
                  <button className="bttn rounded-md my-4" onClick={open}>
                    Connect Wallet
                  </button>
                </>
              )}
            </div>

            {account.isConnected && (
              <div>
                <button
                  className="bttn rounded-md my-4 flex gap-5"
                  onClick={handleSubmit}
                  disabled={isSubmit}>
                  {isSubmit && <AiOutlineLoading className="animate-spin" />}
                  Create NFT
                </button>
              </div>
            )}
          </div>

          <div>
            {nftInfo.fileLocal !== null && (
              <div className="relative w-[160px] h-[160px] md:w-[280px] md:h-[280px] cursor-pointer">
                <Image
                  src={nftInfo.fileLocal}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2
