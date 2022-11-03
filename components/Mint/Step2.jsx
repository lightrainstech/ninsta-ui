import { AccountButton, useAccount, useConnectModal } from '@web3modal/react'
import { RiArrowDownSLine, RiWallet2Line } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { truncate } from '../../utils/index'
import Loading from '../Loading'

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
        <h3 className="text-2xl font-thin flex-1">Mint your NFT</h3>
        <RiArrowDownSLine
          set="light"
          primaryColor="#BAF247"
          size={36}
          className="cursor-pointer"
          onClick={() =>
            nftInfo.fileLocal !== null &&
            nftInfo.title !== '' &&
            nftInfo.description !== '' &&
            handleActive(2)
          }
        />
      </div>

      <div className="content pl-0 md:pl-8">
        <div className="flex flex-cols-2 items-start gap-6 justify-start pb-6">
          <div className="col-span-1 h-full">
            <div className="grid grid-col justify-between h-full">
              <div className="mb-5">
                {account.isConnected ? (
                  <>
                    <p>Connected Wallet</p>
                    <div className="flex justify-between items-center text-white rounded-md py-2 px-3 my-4 border ">
                      <p>{truncate(account.address, 20)}</p>
                    </div>
                    {/* <AccountButton /> */}
                  </>
                ) : (
                  <>
                    <p>Click on connect and choose your wallet</p>
                    <button
                      className="text-black rounded-md bg-green-500 hover:bg-green-600 py-2 px-3 my-4"
                      onClick={open}>
                      Connect Wallet
                    </button>
                  </>
                )}
              </div>

              {account.isConnected && (
                <div>
                  <button
                    className="text-black rounded-md disabled:bg-green-300  bg-green-500 hover:bg-green-600 py-2 px-3 my-4"
                    onClick={handleSubmit}
                    disabled={isSubmit}>
                    Create NFT
                  </button>
                  {isSubmit && <Loading />}
                </div>
              )}

              <div className="text-gray-600">
                <p>Doesn’t have a wallet yet?</p>
                <Link href="/">
                  <a className="uppercase">SET UP WALLET</a>
                </Link>
              </div>
            </div>
          </div>

          <div>
            {nftInfo.fileLocal !== null && (
              <div className="relative w-[160px] h-[160px] md:w-[300px] md:h-[300px] cursor-pointer">
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
