import React, { useCallback, useEffect, useState } from 'react'
import { getNetwork, truncate } from '../utils/index'
import { useDispatch, useSelector } from 'react-redux'

import ConnectProvider from '../utils/ConnectProvider'
import Web3 from 'web3'
import toast from 'react-hot-toast'

const ConnectWallet = () => {
  const [provider, loading, connected] = ConnectProvider()
  const dispatch = useDispatch()
  const [account, network] = useSelector(state => [
    state.account,
    state.network
  ])

  const connectHandler = useCallback(async () => {
    try {
      const providerInstance = await provider.connect()
      providerInstance.on('chainChanged', chainChangeCallback)

      const web3Provider = new Web3(providerInstance)
      const account = await web3Provider.eth.getAccounts()
      const chainId = await web3Provider.eth.getChainId()
      const currentNetwork = getNetwork(chainId)

      if (currentNetwork) {
        console.log('handle connect entered', connected)
        dispatch({
          type: 'CONNECT_WALLET',
          data: {
            providerInstance,
            web3Provider,
            account: account[0],
            network: currentNetwork.title
          }
        })
        toast.success('Wallet connected!')
      } else {
        toast.error('Connected network not supported')
      }
    } catch (e) {
      console.log(e)
    }
  }, [provider])

  const handlerDisconnect = () => {
    dispatch({
      type: 'DISCONNECT_WALLET'
    })
  }

  const accountChangeCallback = accounts => {
    if (accounts.length > 0) {
      dispatch({
        type: 'ACCOUNT_CHANGE',
        data: {
          account: accounts[0]
        }
      })
    }
  }

  const chainChangeCallback = (chainId, number) => {
    const newChainID = parseInt(chainId, 5)
    handleNetworkChange(newChainID)
  }

  const handleNetworkChange = chainId => {
    const currentNetwork = getNetwork(chainId)

    if (currentNetwork) {
      dispatch({
        type: 'NETWORK_CHANGE',
        data: {
          network: currentNetwork.title,
          chainId,
          isNetworkConnected: currentNetwork !== null
        }
      })
    } else {
      //toast.error('Connected network not supported')
      console.log('Not supported network')
    }
  }

  if (!account) {
    return (
      <>
        <button
          className="text-black rounded-md bg-green-500 hover:bg-green-600 py-2 px-3 my-4"
          onClick={connectHandler}>
          Connect Wallet
        </button>
      </>
    )
  }
  if (account != '') {
    return (
      <div
        role="button"
        className="text-black max-w-max border border-green-500 rounded-md bg-green-500 px-4 py-2 min-w-max"
        onClick={handlerDisconnect}>
        {truncate(account, 14)}
      </div>
    )
  }
}
export default ConnectWallet
