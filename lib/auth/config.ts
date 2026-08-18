import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { demoUser } from "@/lib/data/demo-data"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // Demo mode - accept any email with password length > 3
        if (credentials?.email && credentials?.password?.length > 3) {
          return {
            id: demoUser.id,
            name: demoUser.name,
            email: credentials.email,
            wallet: demoUser.wallet,
          }
        }

        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.wallet = (user as { wallet?: string }).wallet
        token.id = user.id
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.wallet = token.wallet as string
        session.user.id = token.id as string
      }

      return session
    },
  },

  pages: {
    signIn: "/auth/signin",
  },

  session: {
    strategy: "jwt",
  },

  secret:
    process.env.NEXTAUTH_SECRET ||
    "rotta-secret-key-change-in-production",
}

// NextAuth custom type definitions
declare module "next-auth" {
  interface User {
    wallet?: string
  }

  interface Session {
    user: {
      id?: string
      wallet?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    wallet?: string
  }
}
