import Image from 'next/image'
import cover from '../../public/assets/cover-book-wise.svg'
import { signIn, getSession } from 'next-auth/react'
import {
  AuthError,
  ButtonBox,
  HomeContainer,
  LoginBox,
  LoginContainer,
  TextBox,
} from './styles'
import {
  SignInButton,
  SignInEnterprise,
} from '../components/SignInButton/SignInButton'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

export default function Home() {
  const router = useRouter()

  const hasAuthError = !!router.query.error

  const handleAccess = async (provider: string) => {
    if (provider === 'visitor') {
      await router.push('/start')
    } else {
      await signIn(provider, { callbackUrl: '/start' })
    }
  }

  return (
    <HomeContainer>
      <Image src={cover} alt="Cover image for book-wise" quality={100} />

      <LoginContainer>
        <LoginBox>
          <TextBox>
            <h2>Boas vindas!</h2>
            <p>Faça seu login ou acesse como visitante.</p>
          </TextBox>
          <ButtonBox>
            <SignInButton
              onClick={() => handleAccess('google')}
              variant={SignInEnterprise.Google}
            />
            <SignInButton
              onClick={() => handleAccess('github')}
              variant={SignInEnterprise.Github}
            />
            <SignInButton
              onClick={() => handleAccess('visitor')}
              variant={SignInEnterprise.Visitor}
            />
            {hasAuthError && (
              <AuthError>
                Falha ao se autenticar verifique se você habilitou as permissões
                de acesso.
              </AuthError>
            )}
          </ButtonBox>
        </LoginBox>
      </LoginContainer>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: '/start',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
