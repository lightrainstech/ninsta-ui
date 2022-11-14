import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiLoader5Line } from 'react-icons/ri'
const DCCard = () => {
  return (
    <div className="bg-zinc-800 flex flex-col p-3 gap-3 rounded-md">
      <div className="relative h-[260px]">
        <Image
          src={'/coll/panda.jpeg'}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <strong className="text-xl">Panda</strong>
        <p className="list-info">
          <span>Minted by:</span>
          <Link href="https://opensea.io/assets/ethereum/0x0a278d4c904c4ce1bba91cdc0c3ec2b14307c67c/187">
            <a className="link text-brand-400" target="_blank">
              0xac...23d7
            </a>
          </Link>
        </p>

        <p className="list-info">
          <span>Contract:</span>
          <Link href="https://opensea.io/assets/ethereum/0x0a278d4c904c4ce1bba91cdc0c3ec2b14307c67c/187">
            <a className="link text-brand-400" target="_blank">
              0x6a...3a7c
            </a>
          </Link>
        </p>

        <p className="list-info">
          <span>Token ID:</span>
          <span>17</span>
        </p>
        <p className="list-info">
          <span>Royalty:</span>
          <span>0%</span>
        </p>

        <p className="list-info">
          <span>Minted on:</span>
          <span>Jan 12, 2022</span>
        </p>
        <p className="list-info">
          <span>Chain:</span>
          <span>Polygon</span>
        </p>
      </div>
    </div>
  )
}
const PreviousMints = () => {
  return (
    <div className="py-6 overflow-hidden">
      <h3 className="text-xl mb-3">Your previous mints</h3>

      <div className="flex flex-row space-x-4 items-center justify-center text-gray-300 py-10 animate-pulse">
        <RiLoader5Line size={140} className="text-gray-300 animate-spin" />
        <div>
          <h2 className="text-xl font-bold mb-2">We are Minting...</h2>
          <p>
            We are Minting your Digital Collectible to your wallet. Please wait
            while we update you with the details. It will only take less than a
            minute!
          </p>
        </div>
      </div>

      <div className="w-[600px] md:w-[900px] overflow-scroll">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Array.apply(null, { length: 3 }).map((e, i) => (
            <DCCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviousMints
