import React from 'react'

function Favicons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png?v=22"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png?v=22"
      />
      <link rel="manifest" href="/favicons/site.webmanifest?v=22" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg?v=22"
        color="#BAF247"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico?v=22" />
      <meta name="msapplication-TileColor" content="#111111" />
      <meta
        name="msapplication-config"
        content="/favicons/browserconfig.xml?v=22"
      />
      <meta name="theme-color" content="#100E1A" />
    </>
  )
}

export default Favicons
