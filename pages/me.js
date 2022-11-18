import React, { useEffect } from 'react'

import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import PreviousMints from '../components/Mint/PreviousMints'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function Me() {
  const user = useSelector(state => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      toast.error('You need to login to access this page.')
      router.push('/')
    }
  }, [user])

  return (
    <>
      <NextSeo
        title="My Profile"
        description="As an affiliate, you'll get the chance to connect with Ninsta community while building a passive income that takes almost no time to make."
      />
      <Menu />
      <section className="container py-20">
        <div className="prose prose-normal md:prose-lg mx-auto max-w-screen-md prose-invert">
          <h1 className="leading-relaxed font-serif text-center">
            Welcome, <br />{' '}
            <span className="text-brand-500 break-all">
              {user?.email || 'someone@example.com'}
            </span>
          </h1>
          <div className="not-prose">
            <PreviousMints />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
