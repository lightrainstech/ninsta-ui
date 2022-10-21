import Image from 'next/image'
import React from 'react'

function HomeCard() {
  return (
    <div className="w-full h-52 md:h-auto">
      <div className="w-[100%] h-[100%] relative">
        {/* <Image layout="fill" objectFit="cover" alt="" src="/homecard.png" /> */}
        <Image width={400} height={400} alt="" src="/homecard.png" />
      </div>
    </div>
  )
}

export default HomeCard
