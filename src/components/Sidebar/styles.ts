import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

export const SidebarContainer = styled('div', {
  height: '100vh',
  width: '14.5rem',
  borderRadius: '$md',
  backgroundImage: 'url(/assets/Background.svg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$10 0 $6 0 ',
})

export const LogoNavContainer = styled('div', {
  height: '16rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})

export const Nav = styled('div', {
  marginLeft: '$5',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: '$4',
})

export const NavItem = styled('button', {
  all: 'unset',
  gap: '$3',
  color: '$gray-400',
  display: 'flex',

  textAlign: 'left',
  fontSize: '$lg',

  '&:hover': {
    color: '$gray-100',

    cursor: 'pointer',
  },

  variants: {
    selected: {
      true: {
        color: '$gray-100',
        fontWeight: 'bold',

        '&::before': {
          content: '""',
          position: 'absolute',
          left: '-1.5rem',
          height: '1.5rem',
          width: '0.25rem',
          background: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
          borderRadius: '6px',
        },
      },
    },
  },
})

export const Logged = styled('div', {
  display: 'flex',
  padding: '$1',
  gap: '$3',

  alignItems: 'center',
  color: '$gray-200',

  p: {
    fontWeight: 'bold',
  }, // TODO modificar o bold apenas para uma variante para quando estiver no login
})

const shake = keyframes({
  '0%': { transform: 'translateX(0)' },
  '25%': { transform: 'translateX(-2px)' },
  '50%': { transform: 'translateX(2px)' },
  '75%': { transform: 'translateX(-2px)' },
  '100%': { transform: 'translateX(0)' },
})

export const LoginButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  transition: '0.2s ease',

  '&:hover': {
    animation: `${shake} 0.4s ease`,
  },
})
