import { RiArrowDownSLine, RiWallet2Line } from 'react-icons/ri'
import dynamic from 'next/dynamic'

import { AiOutlineLoading } from 'react-icons/ai'
import Image from 'next/image'
import React from 'react'
import { truncate } from '../../utils/index'
import { useAccount, useNetwork, useSwitchNetwork } from 'wagmi'
import { useWeb3Modal } from '@web3modal/react'

const DynamicNotify = dynamic(() => import('../Notify'))

function Step2({ minting, nftInfo, handleSubmit, handleActive, isSubmit }) {
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const { open } = useWeb3Modal()
  return (
    <div
      className={`rounded p-6 bg-[#1F2126] bg-opacity-60 steps ${
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
              {isConnected ? (
                <>
                  <p>Connected Wallet</p>
                  <div className="flex justify-between items-center text-white rounded py-2 px-3 my-4 border-2 font-mono">
                    <p>{truncate(address, 18)}</p>
                  </div>
                </>
              ) : (
                <div className="flex flex-row space-x-3">
                  <button className="bttn rounded my-4" onClick={open}>
                    Connect Wallet
                  </button>
                  <button
                    className="border-2 border-brand-500 my-4 px-3 rounded text-lg"
                    onClick={open}>
                    Get a wallet
                  </button>
                </div>
              )}
            </div>

            {chain?.unsupported && chains?.length > 0 && (
              <>
                <DynamicNotify
                  {...{
                    title: 'Unsupported chain',
                    message: `Switch your network to ${chains[0].name}`,
                    inline: true,
                    Component: () => (
                      <button onClick={() => switchNetwork(chains[0].id)}>
                        Switch Network
                      </button>
                    )
                  }}
                />
              </>
            )}

            {isConnected && (
              <div>
                <button
                  className="bttn rounded my-4 flex gap-5"
                  onClick={handleSubmit}
                  disabled={isSubmit || chain.unsupported}>
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
