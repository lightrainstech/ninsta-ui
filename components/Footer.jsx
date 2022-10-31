import { RiDiscordFill, RiInstagramFill } from 'react-icons/ri'

import Link from 'next/link'
import React from 'react'

const footerMenu = [
  {
    title: 'FAQ',
    path: '/faq'
  },
  {
    title: 'Add NFT to Instagram',
    path: '/how-add-free-nft-instagram'
  },
  {
    title: 'Affiliate program',
    path: '/become-affiliate'
  }
]

const Footer = () => {
  return (
    <footer className="container p-10 bg-[url(/line-2.png)] bg-top bg-no-repeat">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-xl font-bold font-serif mb-2">Ninsta</h1>
          <h2 className="opacity-70">
            Mint Instagram Digital Collectibles for free
          </h2>
          <div className="flex flex-row space-x-1 mb-4">
            <Link href="https://discord.gg/2p7KT4da3e">
              <a className="cursor-pointer hover:opacity-60">
                <RiDiscordFill size={28} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/MintOnNinsta">
              <a className="cursor-pointer hover:opacity-60">
                <RiInstagramFill size={28} />
              </a>
            </Link>
          </div>
          <p className="text-sm text-gray-700 mt-6">
            In collaboration with{' '}
            <Link href="https://area58.design">
              <a className="cursor-pointer hover:text-gray-400">Area58</a>
            </Link>{' '}
            and{' '}
            <Link href="https://lightrains.com">
              <a className="cursor-pointer hover:text-gray-400">Lightrains</a>
            </Link>
          </p>
          <p className="text-sm text-gray-700">
            <small>&copy; Ninsta 2022</small>
          </p>
        </div>
        <div>
          <h1 className="text-lg font-bold font-serif mb-6">Resources</h1>
          <ul>
            {footerMenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a
                      className="cursor-pointer mt-1.5 block"
                      role="menuitem"
                      tabIndex="-1">
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
