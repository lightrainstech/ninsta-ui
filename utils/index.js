import WalletConnectProvider from '@walletconnect/web3-provider'
import getConfig from 'next/config'

const Web3 = require('web3')

const { publicRuntimeConfig } = getConfig()

const availableNetworks = [
  {
    title: 'Polygon',
    subtitle: 'MATIC',
    chainId: 80001,
    disabled: false,
    rpc: `https://rpc-mumbai.maticvigil.com`
  }
  // {
  //   title: 'Ethereum',
  //   subtitle: 'ETH',
  //   chainId: 5,
  //   disabled: false,
  //   rpc: `https://goerli.infura.io/v3/`
  // }
]

export const delay = ms => new Promise(res => setTimeout(res, ms))

export const getNetwork = chainId => {
  let selectedNetwork = availableNetworks.filter(
    values => values.chainId === chainId && values.disabled === false
  )
  return selectedNetwork.length > 0 ? selectedNetwork[0] : null
}

export const truncate = (str, max, sep) => {
  str = typeof str !== 'undefined' && str !== null ? str : ''
  max = max || 6

  var len = str.length
  if (len > max) {
    sep = sep || '...'
    var seplen = sep.length
    if (seplen > max) {
      return str.substr(len - max)
    }
    var n = -0.5 * (max - len - seplen)
    var center = len / 2

    var front = str.substr(0, center - n)
    var back = str.substr(len - center + n)
    return front + sep + back
  }

  return str
}

// export const truncates = (str, max, sep) => {
//   str = typeof str !== 'undefined' && str !== null ? str : ''
//   max = max || 6

//   var len = str.length
//   if (len > max) {
//     sep = sep || ''
//     var seplen = sep.length
//     if (seplen > max) {
//       return str.substr(len - max)
//     }
//     var n = -0.5 * (max - len - seplen)
//     var center = len / 2

//     var front = str.substr(0, center - n)
//     var back = str.substr(len - center + n)
//     return front + sep + back
//   }

//   return str
// }

export const setupServerProps = async () => {
  try {
    const res = await nftCategory()

    let data = await res.data.data
    if (!data) {
      return {
        notFound: true
      }
    }
    return { props: { data } }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export const requestHandle = promise => {
  return promise
    .then(data => [data, undefined])
    .catch(error => Promise.resolve([undefined, error]))
}

// export const timeConvert = n => {
//   var num = n
//   var hours = num / 60
//   var rhours = Math.floor(hours)
//   var minutes = (hours - rhours) * 60
//   var rminutes = Math.round(minutes)
//   return (
//     num + ' minutes = ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).'
//   )
// }
//
// function padTo2Digits(num) {
//   return num.toString().padStart(2, '0')
// }

// export const convertMsToTime = milliseconds => {
//   let seconds = Math.floor(milliseconds / 1000)
//   let minutes = Math.floor(seconds / 60)
//   let hours = Math.floor(minutes / 60)

//   seconds = seconds % 60
//   minutes = minutes % 60
//   hours = hours % 24

//   return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m ${padTo2Digits(
//     seconds
//   )}s`
// }

// export const secondsToHms = seconds => {
//   let d = Number(seconds)
//
//   if (d <= 0) {
//     return '00:00:00'
//   } else {
//     let h = Math.floor(d / 3600)
//     let m = Math.floor((d % 3600) / 60)
//     let s = Math.floor((d % 3600) % 60)
//
//     let hDisplay = h <= 9 ? '0' + h + ':' : h + ':'
//     let mDisplay = m <= 9 ? '0' + m + ':' : m + ':'
//     let sDisplay = s <= 9 ? '0' + s : s
//
//     return hDisplay + mDisplay + sDisplay
//   }
// }

// export const getRandomColor = name => {
//   // get first alphabet in upper case
//   const firstAlphabet = name.charAt(0).toLowerCase()

//   // get the ASCII code of the character
//   const asciiCode = firstAlphabet.charCodeAt(0)

//   // number that contains 3 times ASCII value of character -- unique for every alphabet
//   const colorNum =
//     asciiCode.toString() + asciiCode.toString() + asciiCode.toString()

//   var num = Math.round(0xffffff * parseInt(colorNum))
//   var r = (num >> 16) & 255
//   var g = (num >> 8) & 255
//   var b = num & 255

//   return {
//     color: 'rgb(' + r + ', ' + g + ', ' + b + ', 0.3)',
//     character: firstAlphabet.toUpperCase()
//   }
// }

// export const trimIt = (str, max, sep) => {
//   max = max || 6

//   var len = str.length
//   if (len > max) {
//     sep = sep || ''
//     var front = str.substr(0, max)
//     return front + sep
//   }

//   return str
// }

// export const getTimeStamp = data => {
//   let days = 0,
//     { hours, minutes, seconds } = data
//   const d = new Date()
//   d.setDate(d.getDate() + +days) // cast the days to number
//   d.setHours(hours, minutes, seconds, 0)
//   console.log(d, d.getTime())
//   return d.getTime()
// }
