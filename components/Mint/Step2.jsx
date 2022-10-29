import { ChevronDown } from 'react-iconly'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Step2({ minting, nftInfo, setNftInfo, handleSubmit }) {
  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps active">
      <div className="pb-10 flex flex-row items-center justify-between space-x-4">
        <span className="number bg-[url(/mint_closed.svg)] bg-no-repeat" />
        <h3 className="text-2xl font-thin flex-1">Mint your NFT</h3>
        <ChevronDown set="light" primaryColor="#BAF247" size={36} />
      </div>

      <div className="content pl-8">
        <div className="grid grid-cols-2 items-start gap-6 justify-start pb-6">
          <div className="col-span-1 h-full">
            <div className="grid grid-col justify-between h-full">
              <div>
                <p>Click on connect and choose your wallet</p>
                <button className="text-black rounded-md bg-green-500 hover:bg-green-600 py-2 px-3 my-4">
                  Connect Wallet
                </button>
              </div>

              <div className="text-gray-600">
                <p>Doesn’t have a wallet yet?</p>
                <Link href="/">
                  <a className="uppercase">SET UP WALLET</a>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="relative w-[300px] h-[300px] cursor-pointer">
              <Image
                src="/nft-minted.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2
