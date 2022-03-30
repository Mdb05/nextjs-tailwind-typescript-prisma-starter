import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import React, { FC } from 'react'

interface NavItemProps {
  href: string
  text: string
  signIn?: boolean
}
const NavItem: FC<NavItemProps> = ({ href, text, signIn = false }) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold'
            : 'font-normal text-black dark:text-white-secondary',
          signIn
            ? 'rounded-lg bg-blue-600 px-3 py-2 text-center text-white-secondary transition-all  md:inline-block'
            : 'dark:hover:bg-black-secondary rounded-lg px-3 py-2 text-center transition-all hover:bg-white-secondary hover:text-black dark:hover:text-white-secondary md:inline-block'
        )}
      >
        <span className="capitalize">{text}</span>
      </a>
    </Link>
  )
}

export default NavItem
