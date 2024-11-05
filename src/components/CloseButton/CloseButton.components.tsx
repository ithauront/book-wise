import { X } from 'phosphor-react'
import { CloseButtonContainer } from './styles'

interface CloseButtonProps {
  size: number
  onClose: () => void
}

export function CloseButton({ size, onClose }: CloseButtonProps) {
  return (
    <CloseButtonContainer onClick={onClose}>
      <X size={size} />
    </CloseButtonContainer>
  )
}
