import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'
import { chain, configureChains, createClient } from 'wagmi'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

/*
 * Chain names
 * polygon, polygonMumbai
 */

export const Web3Mod = {
  projectId: publicRuntimeConfig.walletconnect,
  chains: [chain.polygon], // polygonMumbai change to polygon to go live
  getProvider: () =>
    configureChains(Web3Mod.chains, [
      walletConnectProvider({ projectId: Web3Mod.projectId })
    ]),
  getWagmiClient: () => {
    const { provider } = Web3Mod.getProvider()
    return createClient({
      autoConnect: true,
      connectors: modalConnectors({
        appName: 'web3Moda',
        chains: Web3Mod.chains
      }),
      provider
    })
  },
  getAllClients: () => {
    const wagmiClient = Web3Mod.getWagmiClient()
    const ethereumClient = new EthereumClient(wagmiClient, Web3Mod.chains)
    return { wagmiClient, ethereumClient }
  }
}
