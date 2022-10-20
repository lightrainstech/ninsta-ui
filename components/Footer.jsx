import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <nav className="container">
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
    </nav>
  )
}

export default Footer
