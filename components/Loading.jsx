import React from 'react'
import { BiLoaderCircle } from 'react-icons/bi'

const Loading = () => {
  return (
    <div className="flex items-center space-x-2">
      <BiLoaderCircle className="animate-spin" />
      <p>Please wait...</p>
    </div>
  )
}

export default Loading
