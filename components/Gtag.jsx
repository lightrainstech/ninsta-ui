import Script from 'next/script'

function Gtag() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2YMN4CSY6P"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2YMN4CSY6P');
        `}
      </Script>
    </>
  )
}

export default Gtag
