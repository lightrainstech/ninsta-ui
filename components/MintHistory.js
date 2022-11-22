import React, { useEffect, useState } from 'react'
import { formatDate, truncate } from '../utils'
import { useAccount, useNetwork } from 'wagmi'

import Image from 'next/image'
import Link from 'next/link'
import { RiImageEditLine } from 'react-icons/ri'
import dynamic from 'next/dynamic'
import { getAssets } from '../actions'
import getConfig from 'next/config'
import useInterval from '../hooks/useInterval'
import { useSelector } from 'react-redux'
import { useWeb3Modal } from '@web3modal/react'

const DynamicNotify = dynamic(() => import('./Notify'))
const DynamicPayButton = dynamic(() => import('./Mint/PayButton'))

const { publicRuntimeConfig } = getConfig()

const EmptyCard = ({ asset, isConnected }) => {
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
        {asset.mintType !== 'free' && isConnected && (
          <DynamicPayButton
            nftInfo={asset}
            buttonText="Retry Payment"
            buttonStyles="bttn !px-2 !py-1 !text-sm rounded"
            retry={true}
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
  const { open } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { chain, chains } = useNetwork()

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
      <div className="mb-5">
        {!isConnected && (
          <DynamicNotify
            {...{
              title: 'No wallet connected',
              message: 'You are not connected any wallet',
              Component: () => (
                <button
                  className="bttn rounded px-3 py-2 text-blue-500"
                  onClick={open}>
                  Connect Wallet
                </button>
              )
            }}
          />
        )}

        {chain?.unsupported && chains?.length > 0 && (
          <DynamicNotify
            {...{
              title: 'Unsupported chain',
              message: `Switch your network to ${chains[0].name}`
            }}
          />
        )}
      </div>

      {assets.length === 0 && (
        <div className="h-[300px] w-full flex flex-col items-center justify-center text-gray-600">
          <p className="mt-3 text-lg">Loading...</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {assets.map((e, i) => {
          return e.tokenId ? (
            <DCCard key={i} asset={e} />
          ) : (
            <EmptyCard key={i} asset={e} isConnected={isConnected} />
          )
        })}
      </div>
    </div>
  )
}

export default MintHistory
