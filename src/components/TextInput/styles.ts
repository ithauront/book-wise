import { FormHTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export const ContainerForm = styled('form', {
  position: 'relative',
  width: '32.25rem',
}) as React.FC<FormHTMLAttributes<HTMLFormElement>>

export const CommentInput = styled('textarea', {
  all: 'unset',
  display: 'flex',
  alignItems: 'flex-start',
  whiteSpace: 'pre-wrap',
  overflowWrap: 'break-word',

  height: '10.25rem',
  width: '100%',
  boxSizing: 'border-box',
  padding: '$5',

  borderRadius: '$sm',
  border: '1px solid $gray-500',

  background: '$gray-800',

  caretColor: '$green-100',

  '::placeholder': {
    color: '$gray-400',
    fontSize: '$sm',
  },

  '&:focus': {
    borderColor: '$green-200',
  },
})

export const CharCounter = styled('span', {
  position: 'absolute',
  bottom: '3.75rem',
  right: '$3',
  color: '$gray-400',
  fontSize: '$sm',
})

export const ButtonsContainer = styled('div', {
  marginLeft: 'auto',
  marginTop: '$3',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})

export const IconButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$gray-600',
  borderRadius: '$sm',
  width: '2.5rem',
  height: '2.5rem',

  cursor: 'pointer',

  '&:hover': {
    background: '$gray-400',
  },

  '&:disabled': {
    background: '$gray-300',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      cancel: {
        color: '$purple-100',
      },
      submit: {
        color: '$green-100',
      },
    },
  },

  defaultVariants: {
    variant: 'cancel',
  },
})
