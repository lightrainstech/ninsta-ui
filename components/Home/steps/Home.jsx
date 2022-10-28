import React from 'react'
import toast from 'react-hot-toast'
import HomeCard from '../HomeCard'
import { signup } from '../../../actions'
import { useDispatch, useSelector } from 'react-redux'

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

    //setMinting(2)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-20 top-0 z-10 mx-auto justify-start">
      <div className="col-span-3 md:col-span-3 flex flex-col">
        <h1 className="text-4xl md:text-5xl font-serif font-bold md:!leading-[1.4] gradient">
          Ninsta helps you mint your Digital Collectables for free
        </h1>
        <h2 className="text-2xl font-thin my-3 text-gray-500 w-full md:w-5/6">
          Get your Instagram profile noticed with NFTs
        </h2>
        <div className="py-10">
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
                className="text-white border-2 border-green-500 rounded-r-md bg-green-500 px-3 py-2"
                onClick={signUpSubmit}>
                <span className="hidden md:block text-gray-900">
                  Start Minting
                </span>
                <span className="block md:hidden text-black">start</span>
              </button>
            </>
          ) : (
            <button
              className="text-white border-2 border-green-500 rounded-md bg-green-500 px-3 py-2"
              onClick={() => setMinting(2)}>
              <span className="hidden md:block text-gray-900">
                Start Minting
              </span>
              <span className="block md:hidden text-black">start</span>
            </button>
          )}
        </div>
      </div>
      <div className="col-span-2 md:col-span-2 flex justify-center md:justify-end items-center hidden md:block">
        <HomeCard />
      </div>
    </div>
  )
}

export default Home
