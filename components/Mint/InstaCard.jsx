import React, { useState } from 'react'

import DragDropIcon from '../Icons/DragDropIcon'
import { FileUploader } from 'react-drag-drop-files'
import Image from 'next/image'
import { useSelector } from 'react-redux'

function InstaCard({ nftInfo, setNftInfo }) {
  const fileTypes = ['png', 'jpeg', 'jpg', 'gif']
  const [isLoading, setIsloading] = useState(false)
  const user = useSelector(state => state.user)

  const handleChange = async newFile => {
    setIsloading(true)
    try {
      const tempClone = { ...nftInfo }
      tempClone.file = newFile
      tempClone.fileLocal = URL.createObjectURL(newFile)
      setNftInfo(tempClone)
    } catch (error) {
      console.log('error', error)
    }
    setIsloading(false)
  }

  return (
    <div className="w-[300px]">
      <div className="bg-zinc-800 flex p-4 flex-col gap-4 shadow rounded-md  mx-auto">
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
          {nftInfo?.fileLocal === null ? (
            <div
              className={`flex flex-col justify-center items-center gap-3 h-[300px] w-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer ${
                isLoading && 'animate-pulse'
              }`}>
              <DragDropIcon width={40} height={40} />
              <p className="text-zinc-300 text-sm">Drag and drop your file</p>
            </div>
          ) : (
            <div className="relative h-[300px] w-full cursor-pointer">
              <Image
                src={nftInfo?.fileLocal}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </FileUploader>
      </div>
    </div>
  )
}

export default InstaCard
