import { RiDiscordFill, RiInstagramFill, RiTelegramFill } from 'react-icons/ri'

import Link from 'next/link'
import React from 'react'

function SocialLinks({ size = 28 }) {
  return (
    <div className="flex flex-row space-x-2 my-4">
      <Link href="https://discord.gg/2p7KT4da3e">
        <a
          className="cursor-pointer hover:text-brand-500 hover:opacity-60"
          aria-label="Ninsta Discord">
          <RiDiscordFill size={size} />
        </a>
      </Link>
      <Link href="https://www.instagram.com/ninstacollectables">
        <a
          className="cursor-pointer hover:text-brand-500 hover:opacity-60"
          aria-label="Ninsta Instagram">
          <RiInstagramFill size={size} />
        </a>
      </Link>
      <Link href="https://t.me/+2uPgQRHAT8JiMTM1">
        <a
          className="cursor-pointer hover:text-brand-500 hover:opacity-60"
          aria-label="Ninsta Telegram">
          <RiTelegramFill size={size} />
        </a>
      </Link>
    </div>
  )
}

export default SocialLinks
