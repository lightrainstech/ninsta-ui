import Image from 'next/image'
import React from 'react'

function Step3({ minting, nftInfo, setNftInfo, handleSubmit }) {
  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps active">
      <div className="pb-10 flex flex-row items-center justify-between space-x-8">
        <span className="number bg-[url(/mint_closed.svg)] bg-no-repeat" />
        <h3 className="text-2xl font-thin flex-1">Mint your NFT</h3>
        <span>3</span>
      </div>

      <div className="content">
        <div className="grid grid-cols-3 items-start justify-start pb-6">
          <div>
            <div className="relative w-[180px] h-[180px] cursor-pointer">
              <Image
                src="/homecard.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="font-bold text-lg mb-2">NFT Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor
              incididunt adipiscing eiusmod tempor......
            </p>
            <button className="text-black rounded-md bg-green-500 hover:bg-green-600 py-2 px-3 my-4">
              Mint Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3
