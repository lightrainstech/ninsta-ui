import Image from 'next/image'
import React from 'react'
function Latest() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-serif mb-6">Latest Ninsta Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="rounded p-2 bg-gray-800">
          <div className="rounded overflow-hidden">
            <Image
              width="100%"
              height="100%"
              className="hover:scale-110 transform transition duration-700"
              layout="responsive"
              alt=""
              src="/coll/panda.jpeg"
            />
          </div>
          <h3 className="text-2xl font-bold mt-2">The cute Panda collection</h3>
          <p className="text-gray-400 mt-2">
            Pandas look cuter with some swag.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Latest
