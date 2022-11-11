import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="dark text-gray-50 bg-[#100E1A] font-sans">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="preload"
            as="image"
            href="https://ninsta.io/bgfinal.min.webp"
          />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
