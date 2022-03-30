import Head from 'next/head'
import React, { FC } from 'react'

interface HeaderProps {
  title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
export default Header
