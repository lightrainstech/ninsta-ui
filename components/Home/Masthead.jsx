import { useDispatch, useSelector } from 'react-redux'

import { AiOutlineLoading } from 'react-icons/ai'
import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { signup } from '../../actions'
import toast from 'react-hot-toast'
import useAuth from '../useAuth'
import { useRouter } from 'next/router'

const Masthead = () => {
  const user = useSelector(state => state.user)
  const affcode = useSelector(state => state.affcode)
  const [email, setEmail] = React.useState('')
  const [affCode, setAffCode] = React.useState(affcode)
  const [aff, setAffiliate] = React.useState(false)
  const [isSubmit, setIsSubmit] = React.useState(false)

  const router = useRouter()
  const dispatch = useDispatch()
  const isAuthenticate = useAuth()

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
      toast.error('Failed to authenticate, please try again!')
    } finally {
      setIsSubmit(false)
    }
  }

  return (
    <main className="container py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 top-0 z-10 mx-auto justify-start py-10 md:py-20">
        <div className="col-span-1 flex flex-col">
          <a
            href="https://techcrunch.com/2023/03/13/meta-winds-down-support-for-nfts-on-instagram-and-facebook/"
            class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 max-w-max"
            role="alert">
            <span class="text-xs bg-brand-600 rounded-full text-white px-4 py-1.5 mr-3">
              Important
            </span>{' '}
            <span class="text-sm font-medium">We are shutting down Ninsta</span>
            <svg
              class="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>

          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.3] md:!leading-[1.35]">
            Ninsta helps you mint <br />
            <span className="text-brand-500">Digital Collectibles</span> <br />
            for{' '}
            <TypeAnimation
              sequence={['Instagram', 2000, 'Meta', 2000, 'OpenSea', 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h1>
          <h2 className="text-lg mt-3 text-gray-400 w-full md:w-5/6">
            Get your Instagram profile noticed with NFTs
          </h2>
        </div>
      </div>
    </main>
  )
}

export default Masthead
