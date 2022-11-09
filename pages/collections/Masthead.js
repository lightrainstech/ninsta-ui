import Image from 'next/image'
import React from 'react'

function Masthead() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden rounded-2xl">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            <h2 className="text-3xl md:text-4xl dark:text-white text-gray-800 font-serif">
              Collections
            </h2>
            <p className="text-lg text-gray-700 dark:text-white mt-6">
              Ninsta Collections are the best way for you as a creator to enter
              the world of Digital Collectibles.
            </p>
            <div className="flex mt-8">
              <a href="#" className="bttn rounded text-lg">
                Get started
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 text-center">
            <Image src="/thumbs-up.svg" width="300" height="300" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Masthead
