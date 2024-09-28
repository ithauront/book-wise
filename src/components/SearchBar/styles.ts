import { FormHTMLAttributes } from 'react'
import { styled } from '../../stitches.config'

export const ContainerForm = styled('form', {
  position: 'relative',
  maxWidth: '25rem',
}) as React.FC<FormHTMLAttributes<HTMLFormElement>>

export const SearchInput = styled('input', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',

  height: '3rem',
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

export const SubmitButton = styled('button', {
  position: 'absolute',
  right: '$5',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    color: '$gray-500',
    transition: 'color 0.3s ease',
  },
  '&:focus-within svg, input:focus + & svg': {
    color: '$green-200',
  },
})
