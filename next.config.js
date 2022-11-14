const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Permissions-Policy',
    value: 'geolocation=(self), interest-cohort=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  {
    key: 'Cache-Control',
    value: 'public, max-age=31536000, immutable'
  }
]

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['unsplash.it', 'gateway.pinata.cloud', 'ipfs.io'],
    formats: ['image/avif', 'image/webp']
  },
  publicRuntimeConfig: {
    backendUrl: 'https://api.ninsta.io/api',
    infura: '9969f5fd1bc248289bb7cc90bb20e163',
    walletconnect: 'aacd16027c242c0034350228947f584c',
    nftContract: '0x1954C9356196033f2531f4fC85E46be10383d127',
    chainExplorer: 'https://mumbai.polygonscan.com/',
    opesnSea: 'https://testnets.opensea.io/assets/mumbai/'
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  }
})
