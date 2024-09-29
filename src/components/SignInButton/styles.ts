import { styled } from '../../stitches.config'
import { shake } from '../styles.utils'

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  padding: '$6',

  background: '$gray-600',
  borderRadius: '$md',

  color: '$gray-200',
  fontSize: '$lg',
  fontWeight: '$bold',

  '&:hover': {
    cursor: 'pointer',
    background: '$gray-500',
    animation: `${shake} 0.4s ease`,
  },
})
