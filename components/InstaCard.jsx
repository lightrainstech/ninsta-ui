import React, { useState } from 'react'

import DragDropIcon from './Icons/DragDropIcon'
import { FileUploader } from 'react-drag-drop-files'
import Image from 'next/image'
import { upload } from '../actions'
import { useSelector } from 'react-redux'

function InstaCard({ nftInfo, setNftInfo }) {
  const fileTypes = ['png', 'jpeg', 'jpg', 'gif']
  const [file, setFile] = useState(null)
  const [iSrc, setISrc] = useState(null)
  const user = useSelector(state => state.user)
  const handleChange = async newFile => {
    //setNftInfo(...nftInfo, newFile)
    await upload({ files: newFile }, user.accessToken)
    setISrc(URL.createObjectURL(newFile))
  }

  return (
    <div className="w-[360px]">
      <div className="bg-zinc-800 flex p-4 flex-col gap-4 shadow rounded-md  mx-auto">
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
          {!file && (
            <div className="flex flex-col justify-center items-center gap-3 h-[380px] w-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer">
              <DragDropIcon width={40} height={40} />
              <p className="text-zinc-300 text-sm">Drag and drop your file</p>
            </div>
          )}

          {file && (
            <div className="relative h-[380px] w-full cursor-pointer">
              <Image src={iSrc} alt="" layout="fill" objectFit="contain" />
            </div>
          )}
        </FileUploader>

        <div>
          <strong className="text-lg">{nftInfo.title}</strong>
          <p className="">{nftInfo.description}</p>
        </div>
      </div>
    </div>
  )
}

export default InstaCard
