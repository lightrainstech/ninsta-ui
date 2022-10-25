import React, { useEffect, useState } from 'react'

import { ChevronDownCircle } from 'react-iconly'
import HomeCard from './HomeCard'
import InstaCard from '../InstaCard'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

// const notify = () => toast('Here is your toast.')

const Masthead = () => {
  const [emailAddress, setEmailAddress] = useState('')
  const [minting, setMinting] = useState(1)
  const [royalty, setRoyalty] = useState(false)
  const [freeCount, setFreeCount] = useState(1)
  const [bannerTxt, setBannerTxt] = useState(
    'Ninsta helps you mint your NFTs for free'
  )

  const [nftInfo, setNftInfo] = useState({
    email: emailAddress || '',
    title: '',
    description: '',
    royalty: '',
    royaltyPer: ''
  })

  const handleChange = event => {
    setNftInfo({ ...nftInfo, [event.target.name]: event.target.value })
  }

  const router = useRouter()
  const { u } = router.query

  useEffect(() => {
    if (u) {
      setBannerTxt(`@${u} uses Ninsta to Mint their NFTs in Instagram`)
    }
  }, [u])

  const signUpSubmit = async () => {
    if (!emailAddress.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    } else {
      setMinting(2)
      setNftInfo({ ...nftInfo, email: emailAddress })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(nftInfo)
    setMinting(3)
    setNftInfo({ name: '', description: '' })
  }

  return (
    <main className="container py-20">
      {minting === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 top-0 z-20 mx-auto justify-start">
          <div className="col-span-1 md:col-span-3 flex flex-col">
            <h1 className="text-4xl md:text-5xl font-serif font-medium md:!leading-relaxed leading-normal gradient">
              {bannerTxt}
            </h1>
            <h2 className="text-2xl font-thin my-3 text-gray-400 w-full md:w-5/6">
              Get your Instagram profile noticed with NFTs
            </h2>
            <div className="py-10">
              <input
                type="text"
                value={emailAddress}
                onChange={evt => {
                  setEmailAddress(evt.target.value)
                }}
                placeholder="Email Address"
                className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[200px]"
              />
              <button
                className="text-white border-2 border-green-500 rounded-r-md bg-green-500 px-3 py-2"
                onClick={signUpSubmit}>
                <span className="hidden md:block text-gray-900">
                  Start Minting
                </span>
                <span className="block md:hidden text-black">start</span>
              </button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2  flex justify-center md:justify-end items-center hidden md:block">
            <HomeCard />
          </div>
        </div>
      )}

      {minting === 2 && (
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
          <div className="flex flex-col justify-between h-[200px] pt-8 pb-24">
            <h1 className="text-3xl font-serif font-medium !leading-relaxed">
              Mint your NFT
            </h1>
            <div className="">
              <h1 className="text-2xl font-serif font-medium !leading-relaxed">
                <span className="text-green-500">{freeCount}</span>/3 free NFT
              </h1>
              <p className=" opacity-50">
                Your wallet can Mint 3 free NFTs using Ninsta for your
                Instagram, after that you will be charged.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 top-0 w-full">
            <div className="col-span-1">
              <form onSubmit={handleSubmit}>
                <label htmlFor="title">NFT Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={nftInfo.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <label htmlFor="description">Caption</label>
                <textarea
                  id="description"
                  name="description"
                  value={nftInfo.description}
                  placeholder="Caption"
                  onChange={handleChange}
                  rows={3}
                />
                <div className="min-h-[20px] mb-4">
                  <strong
                    onClick={() => setRoyalty(!royalty)}
                    className="text-blue-400 block cursor-pointer">
                    Royalty?
                  </strong>
                  {royalty && (
                    <div>
                      <label htmlFor="royalty">Royalty Wallet</label>
                      <input
                        type="text"
                        id="royalty"
                        name="royalty"
                        value={nftInfo.royalty}
                        placeholder="Royalty Wallet"
                        onChange={handleChange}
                      />

                      <label htmlFor="royaltyPer">Royalty Percentage</label>
                      <input
                        type="number"
                        min={0}
                        max={50}
                        id="royaltyPer"
                        name="royaltyPer"
                        value={nftInfo.royaltyPer}
                        placeholder="Royalty Percentage"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
                <button className="text-black border-2 border-green-500 rounded-md bg-green-500 hover:bg-green-600 px-3 py-2">
                  Mint Now
                </button>
              </form>
            </div>
            <div className="col-span-1">
              <InstaCard nftInfo={nftInfo} />
            </div>
          </div>
        </motion.div>
      )}

      {minting === 3 && (
        <div className="done w-full flex flex-col items-center gap-4">
          <h3 className="text-5xl font-serif">Ninsta is minting your NFT</h3>
          <ChevronDownCircle
            set="broken"
            primaryColor="greenyellow"
            size={64}
          />
        </div>
      )}
    </main>
  )
}

export default Masthead
