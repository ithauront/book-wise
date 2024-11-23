import { styled } from '../../stitches.config'
import { Box } from '../Box/Box.component'

export const BookBoxContainer = styled(Box, {
  padding: '$6',
  gap: '$8',
  minWidth: '20rem',
  variants: {
    isUserReview: {
      true: {
        background: '$gray-600',
      },
      false: {},
    },
  },
  defaultVariants: {
    isUserReview: false,
  },
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

    '> :last-child': {
      display: 'inline',
    },
  },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
  },

  'div > h3': {
    color: '$gray-100',
    fontSize: '$md',
    fontWeight: '$bold',
  },

  'div > p': {
    color: '$gray-400',
    fontSize: '$sm',
  },

  'section > p': {
    color: '$gray-300',
    fontSize: '$sm',
  },

  variants: {
    isProfile: {
      true: {
        display: 'flex',
        flexDirection: 'column',

        section: {
          display: 'flex',
          flexDirection: 'row',

          '>div': {
            '> :last-child': {
              display: 'block',
              marginTop: '76px',
            },
          },
        },
      },
    },
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
          '> div': {
            maxWidth: '12rem',
          },

          height: 'inherit',
          '> :last-child': {
            display: 'inline',
          },
        },
      },
      false: {},
    },
    isUserReview: {
      true: {
        background: '$gray-600',
        section: {
          display: 'flex',

          '.isUserReviewHeaderDiv': {
            display: 'flex',
            justifyContent: 'space-between',
            width: '24rem',
            '> :last-child': {
              display: 'inline',
            },
          },

          height: 'inherit',
          '> :last-child': {
            display: 'inline',
          },
        },
      },
      false: {},
    },
    isExplore: {
      true: {
        '&:hover': {
          cursor: 'pointer',
        }, // TODO por enquanto deixa o pointer aqui. talvez depois colocar em outros lugares se outros modos tambem forem clicaveis.
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
        'div > h3': {
          color: '$gray-100',
          fontSize: '$md',
          fontWeight: '$bold',
          width: '10rem',
        },
      },
      false: {},
    },
  },
  defaultVariants: {
    isSummary: false,
    isExplore: false,
    isUserReview: false,
  },
})
