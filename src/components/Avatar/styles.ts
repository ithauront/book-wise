import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarBorder = styled('div', {
  display: 'inline-block',
  background: '$gradient-vertical',
  borderRadius: '$full',
  padding: '2px',
})

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: '$gray-800',

  variants: {
    size: {
      sm: {
        width: '1.5rem',
        height: '1.5rem',
      },
      md: {
        width: '2.5rem',
        height: '2.5rem',
      },
      lg: {
        width: '4.5rem',
        height: '4.5rem',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})

AvatarContainer.displayName = 'Avatar'
