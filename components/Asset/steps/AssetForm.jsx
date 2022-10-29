import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InstaCard from '../../InstaCard'

const AssetForm = ({ minting, nftInfo, setNftInfo, handleSubmit }) => {
  const [freeCount, setFreeCount] = useState(1)
  const [royalty, setRoyalty] = useState(false)

  const handleChange = event =>
    setNftInfo({ ...nftInfo, [event.target.name]: event.target.value })

  return (
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
        <div>
          <h1 className="text-2xl font-serif font-medium !leading-relaxed">
            <span className="text-green-500">{freeCount}</span>/3 free NFT
          </h1>
          <p className="opacity-50">
            Your wallet can Mint 3 free NFTs using Ninsta for your Instagram,
            after that you will be charged.
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
          <InstaCard {...{ nftInfo, setNftInfo }} />
        </div>
      </div>
    </motion.div>
  )
}

export default AssetForm
