import React, { useCallback, useEffect, useState } from 'react'
import { getNetwork, truncate } from '../utils/index'
import { useDispatch, useSelector } from 'react-redux'

import ConnectProvider from '../utils/ConnectProvider'
import Web3 from 'web3'
import getConfig from 'next/config'
import { toast } from 'react-toastify'

const ConnectWallet = () => {
  const [provider, loading, connected] = ConnectProvider()
  const dispatch = useDispatch()
  const [data, setData] = React.useState(false)
  const [datas, setDatas] = React.useState(false)
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
      // const accounts = account[0]
      // let ethBalance = await web3Provider.eth.getBalance(accounts) // Get wallet balance
      // ethBalance = web3Provider.utils.fromWei(ethBalance, 'ether') //Convert balance to wei
      // setDatas(ethBalance, accounts, chainId)
      // dispatch({ type: 'ADD_BALANCE', payload: ethBalance })

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
        toast.success('Wallet connected!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      } else {
        toast.error('Connected network not supported')
        console.log('Connected network not supported')
      }
      // const res = await nftLog({
      //   wallet: account[0]
      // })
      // console.log('res', res)

      // dispatch({ type: 'ADD_TOKEN', payload: res.data.data.data })
      //setToken(null)
    } catch (e) {
      console.log(e)
    }
  }, [provider])

  const handlerDisconnect = () => {
    dispatch({
      type: 'DISCONNECT_WALLET'
    })
    // localStorage.clear()
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
  ///Auto-connect
  // useEffect(() => {
  //   if (!loading && connected) {
  //     // condition
  //     connectHandler()
  //   }
  // }, [connectHandler, loading, connected])
  // console.log(account)

  if (!account) {
    return (
      <>
        <div
          role="button"
          className="max-w-max  border border-green-500 px-4 py-2 rounded-md cursor-pointer hover:bg-green-500  hover:border"
          onClick={connectHandler}>
          Connect Wallet
        </div>
      </>
    )
  }
  if (account != '') {
    return (
      <div
        role="button"
        className="text-black max-w-max border border-green-500 rounded-md bg-green-500 px-4 py-2  "
        onClick={handlerDisconnect}>
        {truncate(account, 14)}
      </div>
    )
  }
}
export default ConnectWallet
