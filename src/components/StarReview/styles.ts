import { styled } from '../../stitches.config'

export const StarReviewContainer = styled('section', {
  display: 'flex',
  alignSelf: 'flex-start',
  color: '$purple-100',

  button: {
    all: 'unset',

    ':hover': {
      cursor: 'pointer',

      color: '$purple-200',
    },
  },

  ':disabled': {
    ':hover': {
      cursor: 'default',

      color: '$purple-100',
    },
  },
})
