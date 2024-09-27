import { ComponentProps } from 'react'
import {
  AvatarBorder,
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from './styles'
import { User } from 'phosphor-react'

interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size, ...props }: AvatarProps) {
  return (
    <AvatarBorder>
      <AvatarContainer size={size}>
        <AvatarImage {...props} />
        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarBorder>
  )
}
