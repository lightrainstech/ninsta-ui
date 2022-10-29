import { useEffect, useState } from 'react'

import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const ConnectProvider = props => {
  const [provider, setProvider] = useState(null)
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const providerOptions = {
      network: 'polygon',
      walletconnect: {
        display: {
          name: 'Wallet Connect'
        },
        package: WalletConnectProvider,
        options: {
          infuraId: publicRuntimeConfig.infura // required
        }
      }
    }
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      theme: 'light',
      providerOptions // required
    })
    setConnected(web3Modal.cachedProvider !== '')
    setProvider(web3Modal)
    setLoading(false)
  }, [])

  return [provider, loading, connected]
}
export default ConnectProvider
