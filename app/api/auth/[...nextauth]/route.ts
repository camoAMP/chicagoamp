import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const adminEmail = process.env.ADMIN_EMAIL ?? "admin@chicagoamp.com"
const adminPassword = process.env.ADMIN_PASSWORD ?? "change-me"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return { id: "admin", name: "Chicago AMP Admin", email: adminEmail }
        }

        return null
      },
    }),
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.role = "admin"
      }
      return token
    },
    session({ session, token }) {
      if (session.user) {
        session.user.name = session.user.name ?? "Chicago AMP Admin"
        session.user.email = session.user.email ?? adminEmail
        session.user.image = session.user.image ?? undefined
      }
      return session
    },
  },
  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }
