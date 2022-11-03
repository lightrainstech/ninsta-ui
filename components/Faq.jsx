import React, { useState } from 'react'

const accordionData = [
  {
    title: 'What are digital collectibles?',
    content: `Most simply, an NFT is an entry on a blockchain, the same decentralized digital ledger technology that underlies cryptocurrencies like bitcoin. But unlike most bitcoin–which is fungible, meaning that one coin is essentially indistinguishable from another and equivalent in value–tokens on these blockchains are non-fungible.`
  },
  {
    title: 'Section 2',
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam`
  },
  {
    title: 'Section 3',
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti`
  }
]

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="accordion-item mb-2">
      <div
        className="flex flex-row justify-between gap-3 cursor-pointer hover:text-brand-500"
        onClick={() => setIsActive(!isActive)}>
        <h3 className="text-2xl mb-2">{title}</h3>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="text-lg mb-16">{content}</div>}
    </div>
  )
}

export default function Faq() {
  return (
    <section className="container mt-20">
      <h1 className="leading-relaxed text-5xl font-bold text-center">
        How to add Free NFT to Instagram
      </h1>
      <div className="accordion my-20 mx-40">
        {accordionData.map(({ title, content, key }) => (
          <Accordion title={title} content={content} key={key} />
        ))}
      </div>
    </section>
  )
}
