import React, { Suspense } from 'react'

import Masthead from '../components/Home/Masthead'
import Menu from '../components/Menu'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../components/Footer'), {
  suspense: true
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between bg-[#100E1A] bg-cover md:bg-[url(/bgfinal.min.png)] bg-no-repeat bg-right bg-opacity-60">
      <Menu />
      <Suspense
        fallback={
          <div className="h-screen flex flex-col items-center justify-center text-gray-600">
            <p className="mt-3 text-lg">Loading...</p>
          </div>
        }>
        <Masthead />
        <DynamicFooter />
      </Suspense>
    </div>
  )
}
