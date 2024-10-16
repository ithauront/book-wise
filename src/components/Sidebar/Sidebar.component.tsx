import {
  Logged,
  LoginButton,
  LogoNavContainer,
  Nav,
  NavItem,
  SidebarContainer,
} from './styles'
import logo from '../../../public/assets/Logo.svg'
import Image from 'next/image'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import { Avatar } from '../Avatar/Avatar.component'

interface User {
  name: string | null
  avatar?: string
}

interface SidebarProps {
  isLoggedIn: boolean
  user?: User | null
}

export function Sidebar({ isLoggedIn = false, user }: SidebarProps) {
  const router = useRouter()
  const currentPath = router.pathname // TODO Verify once the pages are done if route and variant on navigation is working

  const handleLogin = () => {} // TODO implement real login once the autentication process is done

  return (
    <SidebarContainer>
      <LogoNavContainer>
        <Image src={logo} alt="Book-wise logo" quality={100} />
        <Nav>
          <NavItem
            onClick={() => router.push('/start')}
            selected={currentPath === '/start'}
          >
            <ChartLineUp size={24} />
            <p>Início</p>
          </NavItem>
          <NavItem
            onClick={() => router.push('/explorar')}
            selected={currentPath === '/explorar'}
          >
            <Binoculars size={24} />
            <p>Explorar</p>
          </NavItem>
          <NavItem
            onClick={() => router.push('/perfil')}
            selected={currentPath === '/perfil'}
          >
            <User size={24} />
            <p>Perfil</p>
          </NavItem>
        </Nav>
      </LogoNavContainer>

      {isLoggedIn ? (
        <Logged>
          <Avatar size="sm" src={user?.avatar} alt="Avatar do usuário" />
          <p>{user?.name}</p>
          <LoginButton onClick={handleLogin}>
            <SignOut color="red" size={20} />
          </LoginButton>
        </Logged>
      ) : (
        <Logged>
          <p>Fazer Login</p>
          <LoginButton onClick={handleLogin}>
            <SignIn color="green" size={20} />
          </LoginButton>
        </Logged>
      )}
    </SidebarContainer>
  )
}
