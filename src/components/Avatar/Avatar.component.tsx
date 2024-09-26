import { ComponentProps } from 'react'
import {
  AvatarBorder,
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from './styles'
import { User } from 'phosphor-react'

export function Avatar(props: ComponentProps<typeof AvatarImage>) {
  return (
    <AvatarBorder>
      <AvatarContainer>
        <AvatarImage {...props} />
        <AvatarFallback delayMs={600}>
          <User />
        </AvatarFallback>
      </AvatarContainer>
    </AvatarBorder>
  )
}
