import React, { useState } from 'react'

import { FAQPageJsonLd } from 'next-seo'

const accordionData = [
  {
    questionName: 'What are digital collectibles?',
    acceptedAnswerText: `<b>Digital Collectibles</b> refers to digital entities or unique digital items (like an NFT) that one can create, trade, and share on Instagram. One can look for its record of ownership through blockchain technology.`
  },
  {
    questionName: 'What is Ninsta?',
    acceptedAnswerText: `<b>Ninsta</b> is a global platform that helps you share your <b>digital collectibles on Instagram</b>, in less time and free of cost. It is a one-of-its-kind tool that helps you mint your image into a digital collectible, freely and easily.`
  },
  {
    questionName: 'What do I need to mint a digital collectible?',
    acceptedAnswerText: `You only require the image you need to be converted into a collectible, along with a questionName and a caption. Once you’ve got these aspects set, you’re ready to mint in your digital collectible.`
  },
  {
    questionName: 'How can I create more free Digital Collectibles?',
    acceptedAnswerText: `You can always earn free slots to create more Digital Collectibles by supporting Ninsta in various social media. Please join our <a href="https://discord.gg/2p7KT4da3e" class="link">Discord</a> server for more details.`
  },
  {
    questionName:
      ' Are there any additional benefits I can avail myself of if I use Ninsta for minting my digital collectible?',
    acceptedAnswerText: `Absolutely! Ninsta offers <b>Royalty</b> to its users, who wish to put up their digital collectibles for sale in the future. All you need to do is to click on the <b>Royalty</b> tab and add your details, to proceed to trade your digital collectibles, and gain royalty.`
  },
  {
    questionName: 'Will Ninsta have access to my digital wallet?',
    acceptedAnswerText: `No. Our platform adheres to the principle of the user’s integrity and privacy. We won’t have access to the user’s wallet. We’ll only be requiring your wallet's public address to upload in your digital collectible.`
  },
  {
    questionName: 'What if I don’t have an NFT wallet?',
    acceptedAnswerText: `With Ninsta, it’s something to not worry about. Our platform provides the option of <b>Setting Up of wallet</b> to its users. One can select an option from the set of available wallet options, to proceed further. This would then create a wallet for you to begin your digital collectible journey.`
  },
  {
    questionName: 'How do I publish my digital collectible to Instagram?',
    acceptedAnswerText: `To do this, you need to have a common NFT wallet for your digital collectible linked to our platform, and on Instagram. Once your collectible is ready, it will be uploaded to your wallet. Open your Instagram and go to <b>Digital Collectibles</b> from <b>Settings</b>. You can now choose the digital collectible you want to be displayed on your Instagram.`
  },
  {
    questionName: 'What is the Ninsta Affiliate Program?',
    acceptedAnswerText: `The <b>Ninsta Affiliate Program</b> is a plan built to connect with the Ninsta community. As an affiliate, one needs to promote our products and services. Ninsta would provide the tools and means to its affiliates. Moreover, an affiliate would be eligible to earn a substantial commission, based on their performance.`
  },
  {
    questionName: 'How do I become a Ninsta affiliate?',
    acceptedAnswerText: `To become a part of our community, go to <a class='link' href='https://ninsta.io/become-affiliate'>https://ninsta.io/become-affiliate</a>. Enter your email address, and click on <b>Get Code</b> to begin your journey with us.`
  },
  {
    questionName: 'How can I contact the Ninsta team?',
    acceptedAnswerText: `You can reach out to us: <ul class="list-disc list-inside ml-3"><li>Email Support: <a class="link" href="mailto:hello@ninsta.io">hello@ninsta.io</a></li><li>Social Media: <a class="link" href="https://www.instagram.com/ninstaio/">Instagram</a>, <a class="link" href="https://discord.com/invite/2p7KT4da3e">Discord<a/></li><li>Platform Support: <a class="link" href="https://ninsta.io/contact">Contact Us</a></li></ul>`
  }
]

const Accordion = ({ questionName, acceptedAnswerText, open }) => {
  const [isActive, setIsActive] = useState(open)
  return (
    <div className="accordion-item mb-3">
      <div
        className="flex flex-row justify-between gap-3 cursor-pointer hover:text-brand-500"
        onClick={() => setIsActive(!isActive)}>
        <h3 className="text-2xl mb-2">{questionName}</h3>
        <div className="text-xl">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && (
        <div
          className="text-lg mb-16 text-gray-300 bg-slate-800 p-3 rounded leading-relaxed faq"
          dangerouslySetInnerHTML={{ __html: acceptedAnswerText }}
        />
      )}
    </div>
  )
}

export default function Faq() {
  return (
    <section className="container mt-20">
      <h1 className="h1text">Frequently Asked Questions (FAQ)</h1>
      <div className="accordion my-20 mx-4 md:mx-40">
        {accordionData.map(({ questionName, acceptedAnswerText }, key) => (
          <Accordion
            questionName={questionName}
            acceptedAnswerText={acceptedAnswerText}
            key={key}
            open={key === 0 ? true : false}
          />
        ))}
      </div>
      <FAQPageJsonLd mainEntity={accordionData} />
    </section>
  )
}
