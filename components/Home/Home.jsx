import { useDispatch, useSelector } from 'react-redux'

import HomeCard from './HomeCard'
import Link from 'next/link'
import React from 'react'
import { signup } from '../../actions'
import toast from 'react-hot-toast'

const Home = ({ setMinting }) => {
  const [email, setEmail] = React.useState('')
  const user = useSelector(state => state.user)

  const dispatch = useDispatch()

  const signUpSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    }
    const result = await signup({ name: email.split('@')[0], email })
    dispatch({
      type: 'USER_LOGIN',
      data: { user: { ...result.data.data } }
    })
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 top-0 z-10 mx-auto justify-start py-10 md:py-20">
      <div className="col-span-1 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-serif font-bold md:!leading-[1.4] gradient">
          Ninsta helps you mint <br />
          Digital Collectables <br />
          for free
        </h1>
        <h2 className="text-xl font-thin my-3 text-gray-500 w-full md:w-5/6">
          Get your Instagram profile noticed with NFTs
        </h2>
        <div className="py-8">
          {user === null ? (
            <>
              <input
                type="text"
                value={email}
                onChange={evt => {
                  setEmail(evt.target.value)
                }}
                placeholder="Email Address"
                className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[200px]"
              />
              <button
                className="text-white border-2 border-green-500 rounded-r-md bg-green-500 px-3 py-2 -ml-2"
                onClick={signUpSubmit}>
                <span className="hidden md:block text-gray-900">
                  Start Minting
                </span>
                <span className="block md:hidden text-black">start</span>
              </button>
            </>
          ) : (
            <Link href="/mint-digital-collectable">
              <a className="text-white border-2 border-green-500 rounded-md bg-green-500 px-3 py-2 block max-w-max">
                <span className="font-bold text-lg text-gray-900">
                  Start Minting
                </span>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
