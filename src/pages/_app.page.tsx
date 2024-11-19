import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { globalStyles } from '../styles/global'
import { UserProvider } from '../context/UserContext'

globalStyles()
// TODO caso o login não seja feito na pagina start ele não carrega tudo porque o getserverside esta na pagina start. talvez mover a logica do session para o arquivo app. e talvez nesse caso não seja mais necessario o arquivo de context.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  )
}
