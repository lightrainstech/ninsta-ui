/* eslint-disable import/no-anonymous-default-export */
const site_name = 'Mint Digital Collectibles',
  desc = 'Free tool to Mint Digital Collectibles for Instagram. #MintedOnNinsta'

export default {
  title: site_name,
  titleTemplate: `%s | Ninsta`,
  description: desc,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://ninsta.io/',
    siteName: `Ninsta - ${site_name}`,
    title: `Ninsta - ${site_name}`,
    description: desc,
    images: [
      {
        url: 'https://ninsta.io/og/free-tool.png',
        width: 1200,
        height: 640,
        alt: desc,
        type: 'image/png'
      }
    ]
  }
}
