import Footer from '../../components/Footer'
import { NextSeo } from 'next-seo'
import React from 'react'
import { RiLoader5Line } from 'react-icons/ri'
import Router from 'next/router'

export default function Home() {
  const { affcode } = Router.query

  const redirect = () => {
    setTimeout(() => {
      Router.push('/')
    }, 2000)
  }
  redirect()

  return (
    <>
      <NextSeo title="Redirecting..." description="Become Ninsta affiliate" />
      <div className="h-screen flex flex-col items-center justify-center text-gray-600">
        <RiLoader5Line className="animate-spin text-gray-600" size={40} />
        <p className="text-sm mt-3 text-lg">Redirecting...</p>
        <p>{affcode}</p>
      </div>
      <Footer />
    </>
  )
}
