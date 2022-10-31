import React, { useEffect, useState } from 'react'
import { RiArrowDownSLine, RiImage2Fill } from 'react-icons/ri'

import InstaCard from './InstaCard'

function Step1({ minting, nftInfo, setNftInfo, handleStep1 }) {
  const [royalty, setRoyalty] = useState(false)

  const handleChange = event =>
    setNftInfo({ ...nftInfo, [event.target.name]: event.target.value })

  return (
    <div
      className={`rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps ${
        minting === 1 && 'active'
      }`}>
      <div className="pb-10 flex flex-row items-center justify-between space-x-4">
        <span className="number">
          <RiImage2Fill size={18} />
        </span>
        <h3 className="text-2xl font-thin flex-1">NFT details</h3>
        <RiArrowDownSLine set="light" primaryColor="#BAF247" size={36} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-8 content">
        <div className="col-span-1">
          <label htmlFor="title">Title</label>
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
              className="text-blue-400 block cursor-pointer select-none">
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
          <button
            className="text-black rounded-md bg-green-500 hover:bg-green-600 px-3 py-2 w-full"
            onClick={handleStep1}>
            Save & Proceed
          </button>
        </div>
        <div className="col-span-1">
          <InstaCard {...{ nftInfo, setNftInfo }} />
        </div>
      </div>
    </div>
  )
}

export default Step1
