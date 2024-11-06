import {
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
import { useState } from 'react'
import { Modal } from '../Modal/Modal.component'
import { signOut } from 'next-auth/react'

interface User {
  name: string | null
  avatar?: string
}

interface SidebarProps {
  isLoggedIn: boolean
  user?: User | null
}

export function Sidebar({ isLoggedIn = false, user }: SidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()
  const currentPath = router.pathname

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handleLogout = () => {
    signOut()
  }

  return (
    <>
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
              onClick={() => router.push('/explore')}
              selected={currentPath === '/explore'}
            >
              <Binoculars size={24} />
              <p>Explorar</p>
            </NavItem>
            <NavItem
              onClick={() => router.push('/profile')}
              selected={currentPath === '/perfil'}
            >
              <User size={24} />
              <p>Perfil</p>
            </NavItem>
          </Nav>
        </LogoNavContainer>

        {isLoggedIn ? (
          <div>
            <LoginButton onClick={handleLogout}>
              <Avatar size="sm" src={user?.avatar} alt="Avatar do usuário" />
              <p>{user?.name}</p>

              <SignOut color="red" size={20} />
            </LoginButton>
          </div>
        ) : (
          <div>
            <LoginButton onClick={handleOpenModal}>
              <p>Fazer Login</p>
              <SignIn color="green" size={20} />
            </LoginButton>
          </div>
        )}
      </SidebarContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}
