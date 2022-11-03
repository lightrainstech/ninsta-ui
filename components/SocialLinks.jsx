import { RiDiscordFill, RiInstagramFill } from 'react-icons/ri'

import Link from 'next/link'
import React from 'react'

function SocialLinks() {
  return (
    <div className="flex flex-row space-x-1 my-4">
      <Link href="https://discord.gg/2p7KT4da3e">
        <a
          className="cursor-pointer hover:text-brand-500 hover:opacity-60"
          aria-label="Ninsta Discord">
          <RiDiscordFill size={28} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/ninstacollectables">
        <a
          className="cursor-pointer hover:text-brand-500 hover:opacity-60"
          aria-label="Ninsta Instagram">
          <RiInstagramFill size={28} />
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
