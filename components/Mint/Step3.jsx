import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Step3 = ({ nftInfo }) => {
  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps min-h-[200px]">
      <div className="flex flex-row space-x-3">
        <div>
          <Image src="/thumbs-up.svg" height={140} width={140} alt="" />
        </div>
        <div>
          <h3 className="text-xl font-bold">Congratulations!</h3>
          <p className="font-light text-gray-600">
            {`Your Digital Collectable ${nftInfo.title} has been minted successfully.`}
          </p>
          <Link href="/mint-digital-collectable">
            <a
              className="text-green-500 link inline-flex mt-5 text-lg"
              title="Mint Digital Collectibles for Free">
              Try one more?
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Step3
