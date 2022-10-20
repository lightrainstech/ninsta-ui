import Image from 'next/image'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
      <NextSeo title="Add NFTs to your Instagram" />
      <div className="flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-4xl font-black m-6 text-center">
          Add NFTs to your Instagram
        </h1>
        <h2 className="text-2xl mb-10 text-gray-500 text-center">
          Ninsta lets you add NFTs to Instagram profile
        </h2>
        <div className="flex flex-row items-center gap-5 md:gap-10">
          <Image
            src="/instagram.png"
            width={128}
            height={128}
            alt="Instagram"
          />
          <p className="text-5xl">+</p>
          <Image src="/nft.png" width={128} height={128} alt="NFT" />
        </div>
      </div>
    </>
  )
}
