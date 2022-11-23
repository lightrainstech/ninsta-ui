import React from 'react'

function Favicons() {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png?v=23"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png?v=23"
      />
      <link rel="manifest" href="/favicons/site.webmanifest?v=23" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg?v=23"
        color="#100e1a"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico?v=23" />
      <meta name="msapplication-TileColor" content="#111111" />
      <meta
        name="msapplication-config"
        content="/favicons/browserconfig.xml?v=23"
      />
      <meta name="theme-color" content="#100E1A" />
    </>
  )
}

export default Favicons
