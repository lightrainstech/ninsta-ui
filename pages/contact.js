import Footer from '../components/Footer'
import Link from 'next/link'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import SocialLinks from '../components/SocialLinks'
export default function Home() {
  return (
    <>
      <NextSeo title="Contact Us" description="Contact Ninsta support team" />
      <Menu />
      <div className="container mt-20">
        <h1 className="h1text mb-16">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          <div>
            <p className="mb-8 text-xl">
              {`Our support team acknowledges and takes on board that
              entrepreneurial exploration isn’t facile – it comes with a galore
              of challenges and probabilities – and that’s why we’re here to
              assist, aid and advise you, on your journey, towards commercial
              build-up.`}
            </p>

            <h3 className="text-2xl mb-2">Email contact</h3>
            <p className="text-lg mb-2">
              {`You can reach us via email, addressing your concerns.
              We’ll make sure to revert to you within a span of 24 hours.`}
            </p>
            <Link href="mailto:hello@ninsta.io">
              <a className="text-brand-500">hello@ninsta.io</a>
            </Link>

            <h3 className="text-2xl mt-8 mb-2">Social Media</h3>
            <p className="text-lg mb-2">
              {`We are also active on following social media for any support that you might need during the whole process of getting your Digital Collectible up in Instagram. Feel free to connect.`}
            </p>
            <SocialLinks size={48} />
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
