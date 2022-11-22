import React from 'react'

const Notify = ({ title, message, Component }) => {
  return (
    <div
      class="flex space-x-1 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert">
      <strong class="font-bold">{title}</strong>
      <span class="block sm:inline">{message}</span>

      {Component && <Component />}
    </div>
  )
}

export default Notify
