import React, { FC, ReactNode } from 'react'
import Footer from '@Components/Footer'
import Header from '@Components/Header'
import Navbar from '@Components/Navbar'

type Props = {
  title: string
  children: ReactNode
}

const Container: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      <div className="flex h-screen flex-col space-y-1">
        <Navbar />
        <main className="mx-auto flex h-screen w-full max-w-2xl flex-col justify-between">
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Container
