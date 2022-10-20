import React from 'react'

export default function Faq() {
  return (
    <section id="faq">
      <div className="bg-lightblue py-20 px-4 prose max-w-none prose-invert">
        <div className="mx-auto max-w-none flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Frequently-asked questions
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">What is an NFT?</h3>
            </dt>
            <dd className="mb-16">
              <p>
                In the most basic terms, non-fungible tokens represent
                uniqueness. They cannot be replicated or be equated with an
                asset that might seem similar.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                Is NFT a Cryptocurrency?
              </h3>
            </dt>
            <dd className="mb-16">
              <p>
                {`Many people mistakenly believe that a digital currency, such as CBDC—that governments around the world are debating—is the same
                thing as a cryptocurrency. Digital currency only has features
                that are similar to actual currency. India's digital currency
                refers to a digital rupee, and the same is true for the dollar,
                which can be obtained in a digital form. It can be used to buy
                products and services.`}
              </p>
            </dd>

            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                What are the Prerequisites?
              </h3>
            </dt>
            <dd className="mb-16">
              <ol>
                <li>
                  Users should have to connect with the wallet in the polygon
                  chain.
                </li>
                <li>Users should have a balance in MATIC currency.</li>
              </ol>
            </dd>

            <dt className="mb-4">
              <h3 className="text-xl font-semibold">
                How to see my NFT in Opensea?
              </h3>
            </dt>
            <dd className="mb-16">
              <ul className="list-decimal">
                <li>
                  Go to the OpenSea account and login into your open sea
                  account.
                </li>
                <li>Choose your profile and click on the icon.</li>
                <li>
                  On opening the profile, you can see your NFT on the page.
                </li>
                <li>
                  Select the NFT you want to sell from your wallet; click Sell
                  on the top right of the item page.
                </li>
                <li>Choose the Type of sale and the Price.</li>
                <li>
                  Set a duration for sale by choosing a default duration or
                  developing a custom duration using the calendar.
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  )
}
