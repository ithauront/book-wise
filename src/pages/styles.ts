import { styled } from '../stitches.config'
// TODO talvez trazer algumas estilizações repetitivas que estão no start e no profile para essa pagina de styles e eliminar repetições.
export const HomeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

export const CoverImage = styled('div', {
  display: 'block',

  '@media(max-width: 768px)': {
    display: 'none',
  },
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

export const AuthError = styled('p', {
  color: '$red',
  marginBottom: '$4',
  fontSize: '$sm',
})
