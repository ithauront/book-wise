import { styled } from '../../styles'

export const BoxComponent = styled('button', {
  // TODO ver a questao do box ser um botão para não dar erro de hidratação com as estrelas.
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
