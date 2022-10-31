import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { NextSeo } from 'next-seo'
import React from 'react'
import toast from 'react-hot-toast'

export default function Home() {
  const [email, setEmail] = React.useState('')

  const signUpSubmit = async () => {
    if (!email.match(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/)) {
      toast.error('Enter a valid email address to get started')
      return
    }
    const result = await signup({ name: email.split('@')[0], email })
    dispatch({
      type: 'USER_LOGIN',
      data: { user: { ...result.data.data } }
    })
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

          <div className="text-center my-20">
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
              onClick={signUpSubmit}>
              <span className="hidden md:block text-gray-900">Apply</span>
            </button>
          </div>

          <p>
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
