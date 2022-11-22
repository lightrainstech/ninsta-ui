import React, { useEffect, useState } from 'react'
import { formatDate, truncate } from '../utils'

import Image from 'next/image'
import Link from 'next/link'
import PayButton from './Mint/PayButton'
import { RiImageEditLine } from 'react-icons/ri'
import { getAssets } from '../actions'
import getConfig from 'next/config'
import useInterval from '../hooks/useInterval'
import { useSelector } from 'react-redux'

const { publicRuntimeConfig } = getConfig()

const EmptyCard = ({ asset }) => {
  return (
    <div className="bg-zinc-800 flex flex-col p-3 gap-3 rounded relative">
      <span className="absolute right-0 bg-yellow-300 opacity-100 z-50 top-0 rounded-tr-md rounded-bl-md px-3 py-1 text-gray-700">
        {asset.mintType === 'matic' && asset.isPaid === false
          ? `Payment pending`
          : `Getting Ready...`}
      </span>
      <div className="animate-pulse bg-gray-900 flex flex-col items-center justify-center h-[180px] md:h-[260px] cursor-wait">
        <RiImageEditLine size={40} />
      </div>

      <p className="list-info">
        <strong className="text-xl">{asset.title}</strong>
        {asset.mintType !== 'free' && (
          <PayButton
            nftInfo={asset}
            buttonText="Retry Payment"
            buttonStyles="bttn !px-2 !py-1 !text-sm rounded"
          />
        )}
      </p>
      <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
      <div className="hidden md:block cursor-wait">
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
        <div className="h-3 bg-slate-700 rounded animate-pulse mt-2"></div>
      </div>
    </div>
  )
}

const DCCard = ({ asset }) => {
  return (
    <div className="bg-zinc-800 flex flex-col p-3 gap-3 rounded">
      <div className="relative h-[180px] md:h-[260px]">
        <Image
          src={asset.media.path.replace('ipfs.io', 'ipfs.ninsta.io')}
          alt={asset.title}
          layout="fill"
          className="hover:scale-110 transform transition duration-700"
          objectFit="contain"
        />
      </div>
      <div>
        <strong className="text-xl">{asset.title}</strong>
        <p className="list-info">
          <span>OpenSea:</span>
          <Link
            href={`${publicRuntimeConfig.opesnSea}${publicRuntimeConfig.nftContract}/${asset.tokenId}`}>
            <a className="link text-brand-400" target="_blank">
              {`${truncate(publicRuntimeConfig.nftContract)}/${asset.tokenId}`}
            </a>
          </Link>
        </p>
        <div className="hidden md:block">
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
            <span>Blockchain:</span>
            <span title="Polygon Mumbai">Polygon</span>
          </p>
        </div>
      </div>
    </div>
  )
}
const MintHistory = () => {
  const user = useSelector(state => state.user)
  const [assets, setAssets] = useState([])

  useEffect(() => {
    const getAllAssets = async () => {
      const assets = await getAssets(user.accessToken)
      setAssets(assets.data.data.data)
    }
    getAllAssets()
  }, [user])

  useInterval(() => {
    const filterAssets = assets.filter(value => !value.tokenId)
    if (filterAssets.length > 0) {
      getAssets(user.accessToken)
        .then(res => setAssets(res.data.data.data))
        .catch(e => console.log(e))
    }
  }, 600000)

  return (
    <div className="p-0 md:py-6 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {assets.map((e, i) => {
          return e.tokenId ? (
            <DCCard key={i} asset={e} />
          ) : (
            <EmptyCard key={i} asset={e} />
          )
        })}
      </div>
    </div>
  )
}

export default MintHistory
