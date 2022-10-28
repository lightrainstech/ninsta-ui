import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const instance = () => {
  const axiosInstance = axios.create({
    baseURL: publicRuntimeConfig.backendUrl,
    headers: {
      'Content-type': 'application/json',
      'x-api-key': publicRuntimeConfig.apiKey
    }
  })

  return axiosInstance
}

export default instance
