import Link from 'next/link'
import React from 'react'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
function CtaBanner({ setBanner, handlePayMint }) {
  return (
    <div className="w-screen h-screen clear-both animate-fade-in-down fixed top-0 lef-0 z-40 bg-gray-900 bg-opacity-90">
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
          <span className="block">
            Want to earn more{' '}
            <span className="gradient text-yellow-400">FREE</span> minting?
          </span>
          <span className="block font-normal text-brand-500 mt-1">
            We&#x27;ve got you covered.
          </span>
        </h2>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex flex-row space-x-2 rounded shadow">
            <Link href="/become-affiliate">
              <a className="bttn rounded">Become an Affiliate</a>
            </Link>
            <Link href="/faq">
              <a className="border-2 border-brand-500 px-3 py-2 rounded text-lg link">
                Other ways
              </a>
            </Link>
          </div>
          <p
            className="mt-4 text-lg cursor-pointer text-insta-500 underline underline-offset-4 hover:text-white"
            onClick={() => setBanner(false)}>
            {`No, i don't want free`}
          </p>

          <button
            type="button"
            className="py-3 px-4 flex flex-row justify-center items-center bttn focus:ring-insta-500 focus:ring-offset-insta-200 text-white w-full transition ease-in duration-200 text-center text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded mt-6"
            onClick={handlePayMint}>
            <RiMoneyDollarCircleLine className="mr-1" />
            Pay and Mint
          </button>
        </div>
      </div>
    </div>
  )
}

export default CtaBanner
