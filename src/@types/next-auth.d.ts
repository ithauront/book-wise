import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string | null
    email: string | null
    avatar_url: string | null
  }

  interface Session {
    user: User
  }
}
