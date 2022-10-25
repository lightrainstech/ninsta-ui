/* eslint-disable import/no-anonymous-default-export */
const site_name = 'Ninsta',
  desc = 'Your free tool to Mint Instagram Digital Collectables'

export default {
  title: site_name,
  titleTemplate: `%s | ${site_name}`,
  description: desc,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ninsta.io/',
    siteName: site_name,
    title: site_name,
    description: desc,
    images: [
      {
        url: 'https://ninsta.io/og/free-tool.png',
        width: 1200,
        height: 720,
        alt: desc,
        type: 'image/png'
      },
      { url: 'https://ninsta.io/og/free-tool-nft.png' }
    ]
  }
}
