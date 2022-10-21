import { useEffect, useState } from 'react'

import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'

const ConnectProvider = props => {
  const [provider, setProvider] = useState(null)
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const providerOptions = {
      walletconnect: {
        display: {
          name: 'Wallet Connect'
        },
        package: WalletConnectProvider,
        options: {
          infuraId: '9aa3d95b3bc440fa88ea12eaa4456161' // required
        }
      }
    }
    const web3Modal = new Web3Modal({
      network: 'ethereum',
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
