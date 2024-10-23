import { styled } from '../../stitches.config'

export const SearchTopicContainer = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',

  padding: '$1 $4',

  borderRadius: '$full',
  border: '1px solid $purple-100',

  transition: 'background 0.3s ease, color 0.3s ease',

  '&:hover': {
    cursor: 'pointer',
    background: '$purple-200',
    '>p': {
      color: '$gray-100',
    },
  },

  '>p': {
    color: '$purple-100',
  },

  variants: {
    selected: {
      true: {
        background: '$purple-200',
        border: '1px solid $purple-200',
        '>p': {
          color: '$gray-100',
        },

        transition: 'background 0.3s ease, color 0.3s ease',

        '&:hover': {
          cursor: 'pointer',
          background: 'transparent',
          '>p': {
            color: '$purple-100',
          },
        },
      },
      false: {},
    },
  },
})
