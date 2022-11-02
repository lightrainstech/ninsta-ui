import React, { Suspense } from 'react'

import Menu from '../components/Menu'
import dynamic from 'next/dynamic'

const DynamicMasthead = dynamic(() => import('../components/Home/Masthead'), {
  suspense: true
})
const DynamicFooter = dynamic(() => import('../components/Footer'), {
  suspense: true
})

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-black bg-cover md:bg-[url(/bgfinal.min.png)] bg-no-repeat bg-right bg-opacity-60">
        <Menu />
        <Suspense
          fallback={
            <div className="h-screen flex flex-col items-center justify-center text-gray-600">
              <p className="mt-3 text-lg">Loading...</p>
            </div>
          }>
          <DynamicMasthead />
          <DynamicFooter />
        </Suspense>
      </div>
    </>
  )
}
