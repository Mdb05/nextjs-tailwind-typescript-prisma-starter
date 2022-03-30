import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
type Props = {
  children: ReactNode
}
export function WithAuth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  const router = useRouter()
  useEffect(() => {
    if (
      (router.pathname.startsWith('/protected') ||
        router.pathname.startsWith('/api')) &&
      status === 'unauthenticated'
    ) {
      router.push('/404')
    } else if (!isUser) signIn()
  }, [isUser, status, router])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return null
}
