import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Step3 = ({ nftInfo }) => {
  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps min-h-[200px]">
      <div className="flex flex-col md:flex-row space-y-3 md:space-x-3">
        <div className="text-center">
          <Image src="/thumbs-up.svg" height={140} width={140} alt="" />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">Congratulations!</h3>
          <p className="font-light text-lg text-gray-500">
            {`Your Digital Collectable ${nftInfo.title} has been minted successfully. You can now see it in your Instagram when you connect the same wallet in Instagram.`}
          </p>
          <Link href="/mint-digital-collectable">
            <a
              className="bttn rounded-md inline-flex mt-5 text-lg"
              title="Mint Digital Collectibles for Free">
              Try one more?
            </a>
          </Link>
          <h3 className="text-2xl mt-8 mb-3 font-serif text-gray-300">
            How to Guides
          </h3>
          <ul>
            <li>
              <Link href="/faq">
                <a
                  className="text-brand-400 link inline-flex text-lg"
                  title="Frequently Asked Questions">
                  Frequently Asked Questions
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Step3
