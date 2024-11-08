import { FormHTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export const ContainerForm = styled('form', {
  width: '32.25rem',
  height: '10.25rem',
}) as React.FC<FormHTMLAttributes<HTMLFormElement>>

export const SearchInput = styled('input', {
  all: 'unset',
  display: 'flex',
  alignItems: 'flex-start',

  height: '10.25rem',
  width: '100%',
  boxSizing: 'border-box',
  padding: '$5',

  borderRadius: '$sm',
  border: '1px solid $gray-500',

  caretColor: '$green-100',

  '::placeholder': {
    color: '$gray-400',
    fontSize: '$sm',
  },

  '&:focus': {
    borderColor: '$green-200',
  },
})
