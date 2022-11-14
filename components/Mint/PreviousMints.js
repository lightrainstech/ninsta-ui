import React, { useEffect, useState } from 'react'
import { formatDate, truncate } from '../../utils'

import Image from 'next/image'
import Link from 'next/link'
import { getAssets } from '../../actions'
import getConfig from 'next/config'
import { useSelector } from 'react-redux'

const { publicRuntimeConfig } = getConfig()

const DCCard = ({ asset }) => {
  return (
    <div className="bg-zinc-800 flex flex-col p-3 gap-3 rounded-md">
      <div className="relative h-[260px]">
        <Image
          src={asset.media.path}
          alt=""
          layout="fill"
          className="hover:scale-110 transform transition duration-700"
          objectFit="contain"
        />
      </div>
      <div>
        <strong className="text-xl">{asset.title}</strong>
        <p className="list-info">
          <span>Minted by:</span>
          <Link
            href={`${publicRuntimeConfig.chainExplorer}address/${asset.wallet}#tokentxnsErc721`}>
            <a
              className="link text-brand-400"
              target="_blank"
              title={asset.wallet}>
              {truncate(asset.wallet)}
            </a>
          </Link>
        </p>

        <p className="list-info">
          <span>Contract:</span>
          <Link
            href={`${publicRuntimeConfig.chainExplorer}token/${publicRuntimeConfig.nftContract}`}>
            <a className="link text-brand-400" target="_blank">
              {truncate(publicRuntimeConfig.nftContract)}
            </a>
          </Link>
        </p>

        <p className="list-info">
          <span>OpenSea:</span>
          <Link
            href={`${publicRuntimeConfig.opesnSea}${publicRuntimeConfig.nftContract}/${asset.tokenId}`}>
            <a className="link text-brand-400" target="_blank">
              0x6a...3a7c
            </a>
          </Link>
        </p>

        <p className="list-info">
          <span>Token ID:</span>
          <span>{asset.tokenId}</span>
        </p>
        <p className="list-info">
          <span>Royalty:</span>
          <span>{`${asset.royaltyPer}%`}</span>
        </p>

        <p className="list-info">
          <span>Minted on:</span>
          <span title={asset.createdAt}>{formatDate(asset.createdAt)}</span>
        </p>
        <p className="list-info">
          <span>Chain:</span>
          <span>Mumbai</span>
        </p>
      </div>
    </div>
  )
}
const PreviousMints = () => {
  const user = useSelector(state => state.user)
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const getAllAssets = async () => {
      const assets = await getAssets(user.accessToken)
      setAssets(assets.data.data.data)
    }
    getAllAssets()
  }, [])

  return (
    <div className="py-6 overflow-hidden">
      <h3 className="text-xl mb-3">Your previous mints</h3>

      <div className="w-[600px] md:w-[900px] overflow-scroll">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {assets.map((e, i) => (
            <DCCard key={i} asset={e} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviousMints
