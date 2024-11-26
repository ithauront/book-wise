import { User } from 'phosphor-react'
import { styled } from '../../stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 6rem 0 0',
  '@media(max-width: 768px)': {
    flexDirection: 'column',

    '>:first-child': {
      marginLeft: '6rem',
      height: '20rem',
      width: '100vw',
    },
  },
})

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '4.5rem 6rem',
  gap: '$10',
  '> p': {
    display: 'flex',
    gap: '$3',
    color: '$gray-100',
    fontWeight: '$bold',
    fontSize: '$2xl',
  },
  '@media(max-width: 768px)': {
    padding: '1rem 0',
  },
})

export const MyBooks = styled('article', {
  width: '38rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const SessionTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '38rem',

  p: {
    color: '$gray-100',
    fontSize: '$sm',
  },

  a: {
    color: '$purple-100',
    fontSize: '$sm',
    textAlign: 'end',
    marginTop: '$px', // I added the 1px here to align without the underline

    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
})

export const AsideContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '9.125rem 6rem',
  gap: '$4',
  '@media(max-width: 768px)': {
    marginLeft: '3rem',
  },
})

export const StyledUser = styled(User, {
  color: '$green-100',
})
