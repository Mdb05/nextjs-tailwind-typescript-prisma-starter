import React, { FC } from 'react'
import { VercelLogo } from './Icons'

const Footer: FC = () => {
  return (
    <footer className="flex h-14 w-full items-center justify-center py-4">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <VercelLogo />
      </a>
    </footer>
  )
}
export default Footer
