import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menu = [
  { title: 'How it Works', path: '/how-it-works' },
  { title: 'Contact', path: '/contact' }
]

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="container ">
      <div className="flex flex-row justify-between items-center mx-auto pt-8">
        <Link href="/">
          <a className="cursor-pointer" aria-label="Ninsta Home">
            <Image src="/ninsta.svg" priority alt="" height={48} width={48} />
          </a>
        </Link>
        <div className="hidden md:flex flex-row items-center space-x-8 ">
          {menu.map((item, index) => {
            return (
              <Link key={index} href={item.path} prefetch={false}>
                <a className="link text-xl">{item.title}</a>
              </Link>
            )
          })}
        </div>
        <div className="relative md:hidden">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-10 h-10 cursor-pointer m-2"
            onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            )}
            {isOpen && (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            )}
          </svg>
          {isOpen && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-64 rounded-lg shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1">
              <div className="p-5 flex flex-col gap-5 h-72" role="none">
                {menu.map((item, index) => {
                  return (
                    <Link key={index} href={item.path} prefetch={false}>
                      <a
                        className="link cursor-pointer text-lg"
                        role="menuitem"
                        tabIndex="-1">
                        {item.title}
                      </a>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Menu
