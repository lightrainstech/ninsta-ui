import React, { useEffect, useState } from 'react'

import HomeCard from './HomeCard'
import InstaCard from '../InstaCard'
import InstaPost from '../InstaPost'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Masthead = () => {
  const [handle, setHandle] = useState('')
  const [minting, setMinting] = useState(false)
  const [freeCount, setFreeCount] = useState(1)
  const [bannerTxt, setBannerTxt] = useState(
    'N-Insta helps you mint your NFTs for free'
  )
  const router = useRouter()
  const { u } = router.query

  useEffect(() => {
    if (u) {
      setBannerTxt(`@${u} uses N-Insta to Mint their NFTs in Instagram`)
    }
  }, [u])

  const signUpSubmit = async () => {
    // if (!handle.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
    //   return
    // }
    setMinting(true)
  }
  return (
    <section className="container ">
      {!minting && (
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-10 md:gap-20 top-0 z-20 mx-auto">
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif font-medium !leading-relaxed">
              {bannerTxt}
            </h1>
            <h2 className="text-2xl font-thin my-3 text-gray-400 w-full md:w-5/6">
              Get your Instagram profile noticed with NFTs
            </h2>
            <div className="py-10  flex gap-5">
              <input
                type="text"
                value={handle}
                onChange={evt => {
                  setHandle(evt.target.value)
                }}
                placeholder="Instagram handle"
                className="outline-0 focus:outline-0 border-2 border-green-500 rounded-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[200px]"
              />
              <button
                className="text-white border-2 border-green-500 rounded-md bg-green-500 px-3 py-2  "
                onClick={signUpSubmit}>
                <span className="hidden md:block text-gray-900">
                  start minting
                </span>
                <span className="block md:hidden text-black">start</span>
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2  flex justify-center md:justify-end items-center ">
            <HomeCard />
          </div>
        </div>
      )}

      {minting && (
        <motion.div
          key={minting}
          initial="initial"
          animate="animate"
          variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            }
          }}>
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 top-0 w-full">
            <div className="col-span-1 flex flex-col justify-between h-full">
              <h1 className="text-3xl font-serif font-medium !leading-relaxed">
                Mint your NFT
              </h1>
              <div className="">
                <h1 className="text-2xl font-serif font-medium !leading-relaxed">
                  <span className="text-green-500">{freeCount}</span>/3 free NFT
                </h1>
                <p className=" opacity-50">
                  Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod
                  tempor incididunt{' '}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <form>
                <label for="title">NFT Title</label>
                <input
                  className=" border-0"
                  type="text"
                  id="title"
                  placeholder="Title"
                />
                <label for="description">Description</label>
                <textarea
                  className=" border-0"
                  id="description"
                  placeholder="Description"
                  rows={3}
                />

                <label for="roy">Royalty</label>
                <input
                  className=" border-0"
                  type="text"
                  id="roy"
                  placeholder="Royalty Wallet"
                />

                <label for="link">External Link</label>
                <input
                  className=" border-0"
                  type="text"
                  id="link"
                  placeholder="External Link"
                />

                <button className="text-black border-2 border-green-500 rounded-md bg-green-500 hover:bg-green-600 px-3 py-2">
                  Mint Now
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <InstaCard />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Masthead
