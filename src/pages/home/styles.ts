import { styled } from '../../stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const LoginContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
})

export const LoginBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '23.25rem',
  gap: '$10',
})
export const ButtonBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})
export const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  h2: {
    fontSize: '$2xl',
  },

  p: {
    color: '$gray-200',
    fontSize: '$4',
  },
})
