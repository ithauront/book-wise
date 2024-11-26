import { styled } from '../../stitches.config'
import { Box } from '../Box/Box.component'

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflowY: 'auto',
  '@media(max-width: 768px)': {
    marginLeft: '7rem',

    background: 'transparent',
  },

  variants: {
    bookDetails: {
      true: {
        alignItems: 'flex-start',
      },
      false: {},
    },
  },
})

export const ModalContent = styled(Box, {
  background: '$gray-700',
  width: '32.25rem',
  height: '21rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.5rem',

  '>p': {
    color: '$gray-200',
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: '1.5rem',
  },
})

export const ButtonContainer = styled('div', {
  width: '22rem',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  gap: '1rem',
})
