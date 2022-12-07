import React, { Suspense } from 'react'

import Masthead from '../components/Home/Masthead'
import Menu from '../components/Menu'
import dynamic from 'next/dynamic'

const DynamicFooter = dynamic(() => import('../components/Footer'), {
  suspense: true
})

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between md:bg-[url(/bg-isolateds.webp)] bg-no-repeat">
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
