import Image from 'next/image'
import React from 'react'
function Latest() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-serif mb-6">Latest Ninsta Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="rounded overflow-hidden">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt=""
            src="/coll/bull.jpg"
          />
          <h3 className="text-2xl font-bold mt-2">Bull</h3>
          <p className="text-gray-400">
            The question of whether computers can think is like the question of
            whether submarines can swim.
          </p>
        </div>

        <div className="rounded overflow-hidden">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            alt=""
            src="/coll/lion.jpeg"
          />
          <h3 className="text-2xl font-bold mt-2">Angry Lion</h3>
          <p className="text-gray-400">
            The question of whether computers can think is like the question of
            whether submarines can swim.
          </p>
        </div>

        <div className="rounded overflow-hidden">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            alt=""
            src="/coll/panda.jpeg"
          />
          <h3 className="text-2xl font-bold mt-2">Cuty Pienda</h3>
          <p className="text-gray-400">
            The question of whether computers can think is like the question of
            whether submarines can swim.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Latest
