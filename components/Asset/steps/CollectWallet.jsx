import React from 'react'

const CollectWallet = ({ nftInfo }) => (
  <div className="w-full">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h3 className="text-2xl font-serif mb-20">
          Your nft is ready. Connect your wallet and collect it!
        </h3>
        <button className="text-black border-2 border-green-500 rounded-md bg-green-500 hover:bg-green-600 px-3 py-2">
          Connect wallet
        </button>
      </div>
    </div>
  </div>
)

export default CollectWallet
