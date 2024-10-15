import { ChartLineUp } from 'phosphor-react'
import { styled } from '../../stitches.config'
import { Box } from '../../components/Box/Box.component'

export const StartContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 6rem 0 0',
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

export const BookBox = styled(Box, {
  padding: '$6',
  gap: '$8',
})

export const BookBoxHeader = styled('div', {
  display: 'flex',

  alignItems: 'center',
  height: '$10',
  gap: '$4',

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    h3: {
      color: '$gray-100',
      fontSize: '$md',
      fontWeight: '$regular',
    },

    p: {
      color: '$gray-400',
      fontSize: '$sm',
    },
  },

  '> :last-child': {
    marginLeft: 'auto',
  },
})

export const BookReview = styled('div', {
  display: 'flex',
  gap: '$5',

  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: '$5',
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',

    h3: {
      color: '$gray-100',
      fontSize: '$md',
      fontWeight: '$bold',
    },

    'div > p': {
      color: '$gray-400',
      fontSize: '$sm',
    },
  },

  'section > p': {
    color: '$gray-300',
    fontSize: '$sm',
  },

  variants: {
    isSummary: {
      true: {
        '> :first-child': {
          width: '4rem',
          height: '6rem',
        },

        section: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',

          height: 'inherit',
          '> :last-child': {
            display: 'inline',
          },
        },
      },
      false: {},
    },
  },
})

export const AsideContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '9.125rem 6rem',
  gap: '$4',
})
export const TrendingBooks = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const StyledChartLineUp = styled(ChartLineUp, {
  color: '$green-100',
})
