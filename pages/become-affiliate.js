import { CopyToClipboard } from 'react-copy-to-clipboard'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import React from 'react'
import { affiliate } from '../actions'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function Home() {
  const [email, setEmail] = React.useState(null)
  const [copy, setCopy] = React.useState(false)
  const [myAffCode, setMyAffCode] = React.useState('')
  const [myAffLink, setMyAffLink] = React.useState('')
  const user = useSelector(state => state.user)
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      setEmail(null)
    } else {
      setEmail(user.email)
    }
  }, [user])

  const formSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    }
    setMyAffCode('')
    setMyAffLink('')
    setCopy(false)
    try {
      const result = await affiliate({ affEmail: email }, user.accessToken)
      setCopy(false)

      if (result.data.data.user.affiliateCode === null) {
        setEmail('')
        toast.error(
          'Unable to find affiliate information associated with this email, make sure you are a registered Ninsta user.'
        )
      } else {
        setMyAffCode(result.data.data.user.affiliateCode || '')
        setMyAffLink(
          `https://ninsta.io/a/${result.data.data.user.affiliateCode}`,
          ''
        )
      }
    } catch (error) {
      toast.error(
        'Unable to find affiliate information, make sure you are a registered Ninsta user.'
      )
      setEmail('')
    }
  }

  return (
    <>
      <NextSeo
        title="Become an Affiliate"
        description="As an affiliate, you'll get the chance to connect with Ninsta community while building a passive income that takes almost no time to make."
      />
      <Menu />
      <section className="container py-20">
        <div className="prose prose-lg mx-auto max-w-screen-md prose-invert">
          <h1 className="h1text">Become an Affiliate for Ninsta</h1>
          <p className="text-center">
            {`As an affiliate, you'll get the chance to connect with Ninsta
            community while building a passive income that takes almost no time
            to make. We support you with the tools you need to promote our
            products and earn a substantial commission.`}
          </p>

          {user?.email ? (
            <div className="text-center my-16">
              <h2>Start spreading the word.</h2>
              <input
                type="text"
                value={email}
                onChange={evt => {
                  setEmail(evt.target.value)
                }}
                placeholder="Email Address"
                className="outline-0 focus:outline-0 border-2 border-brand-500 rounded-l-md px-3 py-2 outline-none m-0 bg-zinc-800 w-[250px] md:w-[300px] -z-10"
              />
              <button
                className="text-white border-2 border-brand-500 rounded-r-md bg-brand-500 px-3 py-2 -ml-2 z-20"
                onClick={formSubmit}>
                Get Code
              </button>
            </div>
          ) : (
            <div
              className="flex flex-col text-xl space-y-1 bg-gray-700 border border-yellow-600 text-gray-200 p-6 rounded items-center justify-center h-40 text-center w-full md:w-4/5 mx-auto bg-opacity-40 my-10"
              role="alert">
              <strong className="font-bold text-2xl">You need to login</strong>
              <span className="block sm:inline">
                You need to be logged in to access your Affiliate details
              </span>
            </div>
          )}

          {myAffCode && (
            <div className="text-center">
              <h3>Your Affiliate Code</h3>

              <CopyToClipboard text={myAffCode} onCopy={() => setCopy(!copy)}>
                <div className="px-4 py-3 bg-gray-800 max-w-max mx-auto text-2xl md:text-3xl font-mono rounded-xl cursor-pointer select-all">
                  {myAffCode}
                </div>
              </CopyToClipboard>
              <h3>Alternatively you can use following link</h3>
              <CopyToClipboard text={myAffLink} onCopy={() => setCopy(!copy)}>
                <div className="px-4 py-3 bg-gray-800 max-w-max mx-auto text-2xl md:text-3xl font-mono rounded-xl cursor-pointer select-all break-all">
                  {myAffLink}
                </div>
              </CopyToClipboard>

              {copy ? (
                <span className="text-center mx-auto text-brand-700">
                  Copied.
                </span>
              ) : null}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}
