import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { persistReducer, persistStore } from 'redux-persist'

import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage'

const initialState = {
  affcode: '',
  user: null,
  account: null,
  network: null,
  wallet: null
}
//create your reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.data.user
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        affcode: '',
        user: null,
        account: null,
        network: null,
        wallet: null
      }
    case 'USER_AFF_CODE':
      return {
        ...state,
        affcode: action.data
      }

    case 'CONNECT_WALLET':
      return {
        ...state,
        account: action.data.account,
        network: action.data.network
      }

    case 'DISCONNECT_WALLET':
      return {
        ...state,
        account: null,
        network: null
      }

    case 'ACCOUNT_CHANGE':
      return {
        ...state,
        account: action.data.account
      }

    case 'NETWORK_CHANGE':
      return { ...state, network: action.data.network }

    case 'ADD_NETWORK':
      return { ...state, network: action.data.networks }

    case 'ADD_WALLET':
      return { ...state, wallet: action.payload }

    default:
      return state
  }
}

const makeStore = ({ isServer }) => {
  if (isServer) {
    //If it's on server side, create a store
    return createStore(rootReducer)
  } else {
    //If it's on client side, create a store which will persist
    const { persistStore, persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default
    const persistConfig = {
      key: 'ninstaio',
      storage
    }
    const persistedReducer = persistReducer(persistConfig, rootReducer) // Create a new reducer with our existing reducer
    const store = createStore(persistedReducer) // Creating the store again
    store.__persistor = persistStore(store)
    return store
  }
}

export const wrapper = createWrapper(makeStore)
