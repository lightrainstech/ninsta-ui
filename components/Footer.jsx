import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <nav className="container">
      <div className="flex flex-row items-start justify-between">
        <div>
          <p className="text-sm text-gray-700">
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
          <Link href="/how-add-free-nft-instagram">
            <a>How to add Free NFT to Instagram</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Footer
