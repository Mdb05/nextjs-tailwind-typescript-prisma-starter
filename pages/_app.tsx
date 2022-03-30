import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { WithAuth } from '@Utils/WithAuth'
import React from 'react'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        {Component.auth ? (
          <WithAuth>
            <Component {...pageProps} />
          </WithAuth>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
