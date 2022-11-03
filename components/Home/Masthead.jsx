import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { signup } from '../../actions'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

const Masthead = () => {
  const user = useSelector(state => state.user)
  const affcode = useSelector(state => state.affcode)
  console.log(affcode)
  const [email, setEmail] = React.useState('')
  const [affCode, setAffCode] = React.useState(affcode)
  const [aff, setAffiliate] = React.useState(false)
  const [isSubmit, setIsSubmit] = React.useState(false)

  const router = useRouter()
  const dispatch = useDispatch()

  const signUpSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    }
    setIsSubmit(true)
    try {
      const result = await signup({ name: email.split('@')[0], email })
      dispatch({
        type: 'USER_LOGIN',
        data: { user: { ...result.data.data } }
      })
      router.push('/mint-digital-collectable')
    } catch (error) {
      toast.error('Login failed. Try again')
    }
    setIsSubmit(false)
  }

  return (
    <main className="container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 top-0 z-10 mx-auto justify-start py-10 md:py-20">
        <div className="col-span-1 flex flex-col">
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.3] md:!leading-[1.35]">
            Ninsta helps you mint <br />
            <span className="text-green-500">Digital Collectibles</span> <br />
            for{' '}
            <TypeAnimation
              sequence={['Instagram', 2000, 'Reddit', 2000, 'OpenSea', 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-lg mt-3 text-gray-400 w-full md:w-5/6">
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
                  className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[220px] -z-10"
                />
                <button
                  className="border-2 border-green-500 rounded-r-md bg-green-500 px-3 py-2 -ml-2 z-20"
                  onClick={signUpSubmit}>
                  <span className="text-gray-900">Sign Me Up!</span>
                </button>

                <div className="min-h-[20px] mb-4">
                  <p
                    onClick={() => setAffiliate(!aff)}
                    className="text-blue-400 block cursor-pointer select-none">
                    Referral Code?
                  </p>
                  {aff && (
                    <div className="animate-fade-in-down">
                      <input
                        type="text"
                        name="royalty"
                        className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[220px] -z-10"
                        value={affCode}
                        placeholder="Referral Code"
                        onChange={evt => {
                          setAffCode(evt.target.value)
                        }}
                      />
                    </div>
                  )}
                </div>

                <p className="text-xs text-gray-500 mt-2 w-[280px]">
                  {`By creating an account, you agree to Ninsta's `}
                  <Link href="/privacy">
                    <a className="text-gray-300 hover:text-green-500">
                      Privacy Policy and Terms of Use.
                    </a>
                  </Link>
                </p>
              </>
            ) : (
              <Link href="/mint-digital-collectable">
                <a className="text-white rounded-md bg-green-500 px-3 py-2 block max-w-max hover:bg-opacity-90">
                  <span className="font-medium text-lg text-gray-900">
                    Start Minting
                  </span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Masthead
