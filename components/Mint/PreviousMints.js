import Image from 'next/image'
import { MdCrueltyFree } from 'react-icons/md'
import React from 'react'

const DCCard = () => {
  return (
    <div className="bg-zinc-800 flex flex-col p-3 gap-3 rounded-md">
      <div className="relative h-[180px]">
        <Image
          src={'/coll/panda.jpeg'}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div>
        <strong className="text-lg">Bull</strong>
        <p className="text-gray-400">
          We build, deploy and manage innovative blockchain solutions at scale
        </p>
      </div>
    </div>
  )
}
const PreviousMints = () => {
  return (
    <div className="py-6">
      <h3 className="text-xl mb-3">Your previous mints</h3>

      <div className="flex flex-row space-x-4 items-center justify-center text-red-300 opacity-70 py-10">
        <MdCrueltyFree size={140} className="text-red-300" />
        <div>
          <h2 className="text-xl font-bold mb-2">You are yet to mint</h2>
          <p>
            We build, deploy and manage innovative blockchain solutions at
            scale. Deploy and manage innovative blockchain solutions at scale
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {Array.apply(null, { length: 3 }).map((e, i) => (
          <DCCard key={i} />
        ))}
      </div>
    </div>
  )
}

export default PreviousMints
