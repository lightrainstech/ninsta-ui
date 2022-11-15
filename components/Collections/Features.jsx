import { RiBitCoinLine, RiHandHeartLine, RiStarSmileLine } from 'react-icons/ri'

import Image from 'next/image'
import React from 'react'

function Features() {
  return (
    <section className="py-20">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-3xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9 font-serif">
            Manage everything
          </h3>
          <ul className="mt-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-indigo-500 text-white">
                    <RiHandHeartLine size={26} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                    We help you
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    We help you set up the Collections in yor favorite
                    Marketplace like OpenSea or Rarible. We take care of the
                    costs for Minting your Digital Collectible as well.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-indigo-500 text-white">
                    <RiStarSmileLine size={26} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                    Visibility, better
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    We present your collection to a wide range of crypto-native
                    users and investors through various social media and online
                    channels. Also you get a chance to fine tune your audience.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded bg-indigo-500 text-white">
                    <RiBitCoinLine size={26} />
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-xl leading-6 text-gray-900 dark:text-white font-bold">
                    Revenue
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                    Revenue share arrangements are tailer made for the kind of
                    audience you are looking for as well the reach that you are
                    expecting. Another huge factor is the quality of the
                    collection.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10 hidden md:block relative lg:mt-0 lg:col-start-1">
          <Image
            src="/collections.jpg"
            height={580}
            width={460}
            alt="ninsta illustration"
            className="relative mx-auto shadow-lg rounded w-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default Features
