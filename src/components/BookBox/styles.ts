import { styled } from '../../stitches.config'
import { Box } from '../Box/Box.component'

export const BookBoxContainer = styled(Box, {
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
      false: {}, // TODO ver se o issummary realmente é necessario.
    },
    isExplore: {
      true: {
        '> :first-child': {
          width: '6.75rem',
          height: '9.5rem',
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
