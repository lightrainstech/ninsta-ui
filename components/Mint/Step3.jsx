import React from 'react'

const Step3 = ({ nftInfo }) => {
  return (
    <div className="rounded-md p-6 bg-[#1F2126] bg-opacity-60 steps min-h-[400px]">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl font-bold">Congrats!</h3>
        <p className="font-light">You NFT has been minted successfully</p>
        <button
          className="bg-blue-400 text-white px-5 py-2 rounded mt-10"
          onClick={() => window.location.reload()}>
          Start Again
        </button>
      </div>
    </div>
  )
}

export default Step3
