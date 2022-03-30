import type { NextPage } from 'next'
import Container from '@Components/Container'
import React from 'react'
import ExternalLink from '@Components/ExternalLink'

const Home: NextPage = () => {
  return (
    <Container title="Nextjs starter">
      <div className="flex flex-col items-start space-y-3 px-3">
        <ExternalLink
          text="Nextjs starter"
          className="text-4xl font-semibold hover:text-blue-500 hover:underline"
          href="https://github.com/Mdb05/nextjs-tailwind-typescript-prisma-starter"
        />
        <div className="flex flex-wrap items-start gap-2">
          <ExternalLink
            text="NextAuth"
            href="https://next-auth.js.org/getting-started/introduction"
          />
          <ExternalLink
            text="Typescript"
            href="https://www.typescriptlang.org/"
          />
          <ExternalLink
            text="Tailwind CSS"
            href="https://tailwindcss.com/docs/"
          />
          <ExternalLink text="Prisma" href="https://www.prisma.io/docs/" />
          <ExternalLink
            text="Prettier"
            href="https://www.npmjs.com/package/prettier"
          />
          <ExternalLink
            text="EsLint"
            href="https://www.npmjs.com/package/eslint"
          />
          <ExternalLink
            text="next-themes"
            href="https://www.npmjs.com/package/next-themes"
          />
        </div>
      </div>
    </Container>
  )
}

export default Home
