import Footer from '../../components/Footer'
import { NextSeo } from 'next-seo'
import React, { useEffect } from 'react'
import { RiLoader5Line } from 'react-icons/ri'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

export default function Home() {
  const router = useRouter()
  const { affcode } = router.query
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: 'USER_AFF_CODE',
      data: affcode
    })
    router.push('/')
  }, [affcode])

  return (
    <>
      <NextSeo title="Redirecting..." description="Become Ninsta affiliate" />
      <div className="h-screen flex flex-col items-center justify-center text-gray-600">
        <RiLoader5Line className="animate-spin text-gray-600" size={40} />
        <p className="mt-3 text-lg">Redirecting...</p>
        <p>{affcode}</p>
      </div>
      <Footer />
    </>
  )
}
