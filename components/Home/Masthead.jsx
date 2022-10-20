import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

const Masthead = () => {
  const [handle, setHandle] = useState('')
  const [minting, setMinting] = useState(false)
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
    <section className="container">
      {!minting && (
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-20 top-0 z-20 mx-auto">
          <div className="col-span-1 md:col-span-3">
            <h1 className="text-4xl md:text-5xl font-serif font-bold !leading-relaxed">
              {bannerTxt}
            </h1>
            <h2 className="text-xl my-3 text-gray-400 w-full md:w-5/6">
              Get your Instagram profile noticed with NFTs
            </h2>
            <div className="py-3">
              <input
                type="text"
                value={handle}
                onChange={evt => {
                  setHandle(evt.target.value)
                }}
                placeholder="Instagram handle"
                className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none bg-zinc-800 w-[200px]"></input>
              <button
                className="border-2 border-green-500 rounded-r-md bg-green-500 hover:bg-green-600 font-bold px-3 py-2 -ml-1"
                onClick={signUpSubmit}>
                <span className="hidden md:block text-gray-900">
                  start minting
                </span>
                <span className="block md:hidden text-black">start</span>
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 top-0 z-20 w-full">
            <div className="col-span-1">
              <form>
                <label for="title">NFT Title</label>
                <input type="text" id="title" placeholder="Title" />
                <label for="description">Description</label>
                <textarea id="description" placeholder="Description" />

                <label for="roy">Royalty</label>
                <input type="text" id="roy" placeholder="Royalty Wallet" />

                <label for="link">External Link</label>
                <input type="text" id="link" placeholder="External Link" />

                <button className="border-2 border-green-500 rounded-md bg-green-500 hover:bg-green-600 px-3 py-2">
                  Mint Now (2/3)
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <div className="flex items-to justify-start w-full bg-zinc-900 rounded h-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 ">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                      WAV, OGG, GLB, GLTF. Max size: 20 MB
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Masthead
