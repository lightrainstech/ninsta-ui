import Link from 'next/link'
import React from 'react'

const footerMenu = [
  {
    title: 'FAQ',
    path: '/faq'
  },
  {
    title: 'How to add Free NFT to Instagram',
    path: '/how-add-free-nft-instagram'
  }
]

const Footer = () => {
  return (
    <footer className="container p-10 bg-[url(/line-2.png)] bg-top bg-no-repeat">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h1 className="text-xl font-bold font-serif mb-2">Ninsta</h1>
          <h2>Mint Instagram Digital Collectables for free</h2>
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
          <h1 className="text-lg font-bold font-serif mb-4">Resources</h1>
          <ul>
            {footerMenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path}>
                    <a
                      className="cursor-pointer mt-1 block"
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
