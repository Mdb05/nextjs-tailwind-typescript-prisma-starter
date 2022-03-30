import React, { FC, useState } from 'react'
import NavItem from './NavItem'
import { XIcon, MenuIcon } from '@heroicons/react/solid'
import cn from 'classnames'

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  function openMenu() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {isOpen === true ? (
        <XIcon
          className={cn(
            !isOpen
              ? '-translate-x-full'
              : 'transform-none transition duration-700 ease-in-out',
            'z-20 h-8 w-8'
          )}
          role={'button'}
          onClick={() => {
            openMenu()
          }}
        />
      ) : (
        <MenuIcon
          className="z-20 h-8 w-8 md:hidden"
          role={'button'}
          onClick={() => {
            openMenu()
          }}
        />
      )}

      <div
        className={cn(
          !isOpen ? '-translate-x-full' : 'duration-500 ease-in-out',
          'fixed inset-0 z-10 flex max-h-fit w-full flex-col bg-gray-50 px-2 pt-14 pb-8 dark:bg-gray-900 md:hidden md:w-1/2'
        )}
      >
        <NavItem href="/" text="Home" />
        <NavItem signIn={true} href="/signin" text="sign in" />
      </div>
    </>
  )
}

export default MobileMenu
