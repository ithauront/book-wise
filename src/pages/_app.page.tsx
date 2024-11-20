import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { globalStyles } from '../styles/global'
import { UserProvider, useUser } from '../context/UserContext'
import { useEffect } from 'react'
import { api } from '../lib/axios'

globalStyles()

function UserUpdater() {
  const { data: session } = useSession()
  const { setUser } = useUser()

  useEffect(() => {
    if (session?.user.email) {
      const fetchUser = async () => {
        try {
          const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}`

          const response = await api.get(
            `${baseUrl}/api/users/${session.user.email}`,
          )
          setUser(response.data.user)
        } catch (error) {
          console.error('Erro ao buscar informações do usuario:', error)
        }
      }
      fetchUser()
    } else {
      setUser(null)
    }
  }, [session, setUser])

  return null
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <UserUpdater />
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}
