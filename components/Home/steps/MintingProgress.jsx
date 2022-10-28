import React from 'react'
import { motion } from 'framer-motion'

import { ChevronDownCircle } from 'react-iconly'

const MintingProgress = ({ minting, animating }) => {
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
      <div
        className={`relative done w-full flex flex-col items-center gap-4 ${
          animating ? 'animate-slide' : ''
        }`}>
        <h3 className="text-5xl font-serif">Ninsta is minting your NFT</h3>
        <ChevronDownCircle
          set="broken"
          primaryColor="greenyellow"
          size={64}
          className="animate-spin"
        />
      </div>
    </motion.div>
  )
}

export default MintingProgress
