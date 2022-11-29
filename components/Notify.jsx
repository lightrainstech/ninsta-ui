import React from 'react'

const Notify = ({ title, message, Component }) => {
  return (
    <div
      className="flex flex-col text-xl space-y-1 bg-zinc-100 border border-red-500 text-gray-200 p-6 rounded items-center justify-center h-40 text-center w-full md:w-2/5 mx-auto bg-opacity-40 my-10"
      role="alert">
      <strong className="font-bold text-2xl">{title}</strong>
      <span className="block sm:inline">{message}</span>
      {Component && <Component />}
    </div>
  )
}

export default Notify
