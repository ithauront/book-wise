import googleLogo from '../../../public/assets/logos_google-icon.svg'
import githubLogo from '../../../public/assets/akar-icons_github-fill.svg'
import { RocketLaunch } from 'phosphor-react'
import Image from 'next/image'
import { Button } from './styles'

export enum SignInEnterprise {
  Google = 'google',
  Github = 'github',
  Visitor = 'visitor',
}

interface SignInButtonProps {
  variant: SignInEnterprise
}
// TODO fazer ele receber a logica no onclick para fazer signIn
export function SignInButton({ variant }: SignInButtonProps) {
  const renderLogo = () => {
    switch (variant) {
      case SignInEnterprise.Google:
        return (
          <Button>
            <Image src={googleLogo} alt="Google logo" width={32} height={32} />
            <p>Entrar com Google</p>
          </Button>
        )
      case SignInEnterprise.Github:
        return (
          <Button>
            <Image src={githubLogo} alt="Github logo" width={32} height={32} />
            <p>Entrar com Github</p>
          </Button>
        )
      case SignInEnterprise.Visitor:
      default:
        return (
          <Button>
            <RocketLaunch size={32} />
            <p>Acessar como visitante</p>
          </Button>
        )
    }
  }
  return renderLogo()
}
