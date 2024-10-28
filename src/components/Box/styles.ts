import { styled } from '../../styles'

export const BoxComponent = styled('button', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',

  background: '$gray-700',

  borderRadius: '$md',

  variants: {
    backgroundColor: {
      regular: {
        background: '$gray-700',
      },
      clear: {
        background: '$gray-600',
      },
    },
  },

  defaultVariants: {
    backgroundColor: 'regular',
  },
})
