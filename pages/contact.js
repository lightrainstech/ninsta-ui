import Footer from '../components/Footer'
import Link from 'next/link'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
export default function Home() {
  return (
    <>
      <NextSeo
        title="Frequently-asked questions"
        description="Frequently-asked questions like How to add Free NFT to your Instagram account"
      />
      <Menu />
      <div className="container mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          <div>
            <h1 className="leading-relaxed text-5xl font-bold">Contact Us</h1>
            <div className="mb-8 text-xl">
              {`Our support team acknowledges and takes on board that
              entrepreneurial exploration isn’t facile – it comes with a galore
              of challenges and probabilities – and that’s why we’re here to
              assist, aid and advise you, on your journey, towards commercial
              build-up.`}
            </div>

            <h3 className="text-2xl">Email contact</h3>
            <p className="text-lg mb-2">
              Have a busy schedule and can’t chat us during the provided hours?
              No worries. You can reach us via email, addressing your concerns.
              We’ll make sure to revert to you within a span of 24 hours.
            </p>
            <Link href="mailto:hello@ninsta.io">
              <a className="link">hello@ninsta.io</a>
            </Link>
          </div>
          <div>
            <iframe
              width="100%"
              height="600"
              name="dPsZMfHayH"
              loading="lazy"
              mozAllowFullscreen="true"
              src="https://fom.li/f/dPsZMfHayH"
              frameborder="0"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
