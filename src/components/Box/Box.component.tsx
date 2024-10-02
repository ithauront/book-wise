import { ComponentProps } from 'react'
import { BoxComponent } from './styles'

export function Box(props: ComponentProps<typeof BoxComponent>) {
  return <BoxComponent {...props} />
}

Box.displayName = 'Box'
