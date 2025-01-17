import Link from 'next/link'
import React from 'react'
import SocialLinks from './SocialLinks'

const footerMenu = [
  {
    title: 'FAQ',
    path: '/faq'
  },
  {
    title: 'Affiliate program',
    path: '/become-affiliate'
  },
  {
    title: 'Privacy Policy',
    path: '/privacypolicy'
  }
]

const Footer = () => {
  return (
    <footer className="container p-10 bg-[url(/line-2.png)] bg-top bg-no-repeat">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div>
          <h3 className="text-xl font-bold font-serif mb-1">Ninsta</h3>
          <h2 className="opacity-70 mb-6">
            Mint Instagram Digital Collectibles for free
          </h2>
          <SocialLinks />
          <p className="text-sm text-gray-700 mt-6">
            In collaboration with{' '}
            <Link href="https://area58.design">
              <a
                className="cursor-pointer hover:text-gray-400"
                aria-label="Area 58">
                Area58
              </a>
            </Link>{' '}
            and{' '}
            <Link href="https://lightrains.com">
              <a
                className="cursor-pointer hover:text-gray-400"
                aria-label="Lightrains">
                Lightrains
              </a>
            </Link>
          </p>
          <p className="text-sm text-gray-700">
            <small>&copy; Ninsta 2022</small>
          </p>
        </div>
        <div>
          <p className="text-lg font-bold font-serif mb-6">Resources</p>
          <ul>
            {footerMenu.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.path} prefetch={false}>
                    <a className="link mt-3 block" aria-label={item.title}>
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

export default React.memo(Footer)
