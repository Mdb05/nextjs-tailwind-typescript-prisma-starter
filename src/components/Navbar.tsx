import React, { useEffect, useState } from 'react'
import Button from './Button'
import MobileMenu from './MobileMenu'
import NavItem from './NavItem'
import ThemeChanger from './ThemeChanger'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { data: session, status } = useSession()
  useEffect(() => setMounted(true), [])

  return (
    <nav className="sticky top-0 mx-auto flex w-full max-w-2xl items-center justify-between bg-white px-2 py-4 dark:bg-black md:px-0">
      <MobileMenu />
      <div className="hidden space-x-1 md:flex">
        <NavItem href="/" text="Nextjs starter" />
        {session && status === 'authenticated' && <></>}
      </div>
      <div className="flex items-center space-x-3 transition-all">
        {status === 'unauthenticated' && (
          <NavItem signIn={true} href="/auth/signin" text="sign in" />
        )}
        {session && status === 'authenticated' && (
          <div className="flex items-center space-x-2">
            <h1 className="font-normal">{session.user.username}</h1>
            <div>
              <Image
                alt="Profile image"
                className="rounded-full"
                height={32}
                width={32}
                layout="fixed"
                objectFit="cover"
                src={session.user?.image || ''}
              />
            </div>
            <Button
              onClick={() => signOut()}
              text="Sign out"
              type="secondary"
            />
          </div>
        )}
        <ThemeChanger isMounted={mounted} />
      </div>
    </nav>
  )
}
