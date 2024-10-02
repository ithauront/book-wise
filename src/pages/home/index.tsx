import Image from 'next/image'
import cover from '../../../public/assets/cover-book-wise.svg'
import { signIn } from 'next-auth/react'
import {
  ButtonBox,
  HomeContainer,
  LoginBox,
  LoginContainer,
  TextBox,
} from './styles'
import {
  SignInButton,
  SignInEnterprise,
} from '../../components/SignInButton/SignInButton'

export default function Home() {
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
              onClick={() => signIn('google')}
              variant={SignInEnterprise.Google}
            />
            <SignInButton
              onClick={() => signIn('github')}
              variant={SignInEnterprise.Github}
            />
            <SignInButton variant={SignInEnterprise.Visitor} />
          </ButtonBox>
        </LoginBox>
      </LoginContainer>
    </HomeContainer>
  )
}
