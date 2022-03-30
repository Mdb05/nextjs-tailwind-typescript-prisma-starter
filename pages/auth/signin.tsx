import { ExclamationCircleIcon } from '@heroicons/react/solid'
import Container from '@Components/Container'
import Button from '@Components/Button'
import React, { FC, useState } from 'react'
import { ClientSafeProvider, getProviders } from 'next-auth/react'
import { GetServerSideProps } from 'next'
interface props {
  providers: ClientSafeProvider[]
  err: string | string[] | null
}
type Error = string | string[] | null
const SignIn: FC<props> = ({ providers, err }) => {
  const [error, setError] = useState<Error>(err)
  return (
    <Container title="SignIn Page">
      <div className="flex flex-col items-start space-y-3 px-3">
        {error && (
          <h1 className="text-normal flex space-x-2 capitalize italic text-red-600">
            <ExclamationCircleIcon className="h-5 w-5" />
            <span>{error}</span>
          </h1>
        )}
        {providers &&
          Object.values(providers).map(provider => (
            <div key={provider.name}>
              <Button name={provider.name} type="secondary" />
            </div>
          ))}
      </div>
    </Container>
  )
}
export default SignIn
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const providers = await getProviders()
  return {
    props: { providers, err: query?.error || null },
  }
}
