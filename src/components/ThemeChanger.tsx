import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import React from 'react'

type ThemeChangerProps = {
  isMounted: boolean
}
const ThemeChanger = ({ isMounted }: ThemeChangerProps) => {
  const { systemTheme, setTheme, theme } = useTheme()
  if (!isMounted) return null
  let currentTheme = systemTheme === 'system' ? 'system' : theme
  return (
    <>
      {currentTheme === 'dark' ? (
        <div
          onClick={() => {
            setTheme('light')
          }}
          role={'button'}
          className="z-20 rounded-lg bg-black-secondary p-2 transition delay-100 ease-in-out"
        >
          <SunIcon className="h-5 w-5 fill-yellow-500" />
        </div>
      ) : (
        <div
          onClick={() => {
            setTheme('dark')
          }}
          role={'button'}
          className="z-20 rounded-lg bg-white-secondary p-2 transition delay-100 ease-in-out"
        >
          <MoonIcon className="h-5 w-5 fill-indigo-500" />
        </div>
      )}
    </>
  )
}

export default ThemeChanger
