import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  pages: {
    signIn: `/auth/signin`,
    error: '/auth/signin', // Error code passed in query string as ?error=
    // verifyRequest: `signin`,
  },
  //   adapter: PrismaAdapter(prisma),
  //   callbacks: {
  //     session: ({ session, user }) => ({
  //       ...session,
  //       user: {
  //         ...session.user,
  //         id: user.id,
  //         username: user.username,
  //       },
  //     }),
  //   },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
      // Return false to display a default error message
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, user, token }) {
      if (session?.user) {
        session.user.id = token.sub
        session.user.username = session.user?.name
          ?.split(' ')
          .join('')
          .toLowerCase()
      }
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token to the token right after signin
      if (account?.access_token) {
        token.access_token = account.access_token
      }
      return token
    },
  },
})
