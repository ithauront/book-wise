import * as Avatar from '@radix-ui/react-avatar'
import { styled, theme } from '../../stitches.config'

export const AvatarBorder = styled('div', {
    display: 'inline-block',
    background: theme.colors['gradient-vertical'],
    borderRadius: '$full',
    padding: theme.space[1], 
  })

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$16',
  height: '$16',
  overflow: 'hidden',
  background:  theme.colors['gray-800']

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
