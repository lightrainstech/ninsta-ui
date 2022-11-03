import { CopyToClipboard } from 'react-copy-to-clipboard'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import React from 'react'
import { affiliate } from '../actions'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

export default function Home() {
  const [email, setEmail] = React.useState('')
  const [copy, setCopy] = React.useState(false)
  const [myAffCode, setMyAffCode] = React.useState('')
  const user = useSelector(state => state.user)

  const formSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    }
    try {
      const result = await affiliate({ affEmail: email }, user.accessToken)
      setCopy(false)
      setMyAffCode(result.data.data.user.affiliateCode || '23cf193k')
      // router.push('/mint-digital-collectable')
    } catch (error) {
      toast.error('Failed to authenticate, please try again!')
    }
  }

  return (
    <>
      <NextSeo
        title="Become an Affiliate"
        description="How to add Free NFT to your Instagram account"
      />
      <Menu />
      <section className="container py-20">
        <div className="prose prose-lg mx-auto max-w-screen-md prose-invert">
          <h1 className="leading-relaxed font-serif text-center">
            Become an Affiliate for Ninsta
          </h1>
          <p>
            {`As an affiliate, you'll get the chance to connect with Ninsta
            community while building a passive income that takes almost no time
            to make. We support you with the tools you need to promote our
            products and earn a substantial commission.`}
          </p>

          <div className="text-center my-16">
            <h2>Apply today and start spreading the word.</h2>
            <input
              type="text"
              value={email}
              onChange={evt => {
                setEmail(evt.target.value)
              }}
              placeholder="Email Address"
              className="outline-0 focus:outline-0 border-2 border-green-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[300px] -z-10"
            />
            <button
              className="text-white border-2 border-green-500 rounded-r-md bg-green-500 px-3 py-2 -ml-2 z-20"
              onClick={formSubmit}>
              <span className="text-gray-900">Get Code</span>
            </button>
          </div>

          {myAffCode && (
            <div className="text-center">
              <CopyToClipboard text={myAffCode} onCopy={() => setCopy(!copy)}>
                <div className="px-4 py-3 bg-gray-800 max-w-max mx-auto text-2xl md:text-3xl font-mono rounded cursor-pointer select-all">
                  {myAffCode}
                </div>
              </CopyToClipboard>
              <h3>Alternatively you can use following link</h3>
              <div className="px-4 py-3 bg-gray-800 max-w-max mx-auto text-2xl md:text-3xl font-mono rounded cursor-pointer select-all break-all">
                {`https://ninsta.io/a/${myAffCode}`}
              </div>
              {copy ? (
                <span className="text-center mx-auto text-green-700">
                  Copied.
                </span>
              ) : null}
            </div>
          )}

          <p className="mt-10">
            {`Each application is reviewed thoroughly to determine if you are
            eligible based on the approval criteria. However, if you have not heard back from
            the network within 1 week after submitting your application, please
            contact Ninsta Support, who can look into this for you. Or, you can
            also wait for the network’s team to follow up with you directly.`}
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
