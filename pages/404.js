import Link from 'next/link'
import Menu from '../components/Menu'
import React from 'react'
export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-between relative">
      <span className="grad w-[1000px] h-[1000px] rounded-full"></span>
      <Menu />
      <div className="h-screen flex flex-col items-center justify-center text-gray-600">
        <h1 className="mt-3 text-lg">404 - Page Not Found</h1>
        <h3 className="text-2xl mt-8 mb-3 font-serif text-gray-300">
          How to Guides
        </h3>
        <ul>
          <li>
            <Link href="/faq">
              <a
                className="text-brand-400 link inline-flex text-lg"
                title="Frequently Asked Questions">
                Frequently Asked Questions
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
