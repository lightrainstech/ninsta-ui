import DragDropIcon from './Icons/DragDropIcon'
import React from 'react'

function InstaCard() {
  return (
    <div class=" bg-zinc-900 flex flex-col gap-4 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4 items-center">
        <div class="rounded-full bg-zinc-800 h-14 w-14"></div>
        <div class="h-4 w-1/3 bg-zinc-800 rounded-md"></div>
      </div>
      <div class="animate-pulse flex flex-col  justify-center items-center gap-3 bg-zinc-800 h-72 w-full">
        <DragDropIcon width={40} height={40} />
        <h1 className="text-zinc-300 text-sm">Drag and drop your file or</h1>
        <input
          className="border-0 max-w-max hidden"
          type="file"
          name="myfile"
        />
      </div>
      <div class="h-4 w-2/3 bg-zinc-800 rounded-md"></div>
      <div class="h-4 w-1/3 bg-zinc-800 rounded-md"></div>
    </div>
  )
}

export default InstaCard
