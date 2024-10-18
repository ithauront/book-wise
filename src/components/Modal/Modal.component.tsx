import { signIn } from 'next-auth/react'
import { SignInButton, SignInEnterprise } from '../SignInButton/SignInButton'
import { Portal } from '../Portal/Portal.component'
import { ButtonContainer, CloseButton, ModalContent, Overlay } from './styles'
import { X } from 'phosphor-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  isForReview?: boolean
}

export function Modal({ isForReview = false, isOpen, onClose }: ModalProps) {
  if (!isOpen) {
    return null
  }
  return (
    <Portal>
      <Overlay onClick={onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={onClose}>
            <X size={24} />
          </CloseButton>
          <p>{`Faça login ${isForReview ? 'para deixar sua avaliação' : ''}`}</p>
          <ButtonContainer>
            <SignInButton
              variant={SignInEnterprise.Google}
              onClick={() => signIn('google')}
            />
            <SignInButton
              variant={SignInEnterprise.Github}
              onClick={() => signIn('github')}
            />
          </ButtonContainer>
        </ModalContent>
      </Overlay>
    </Portal>
  )
}
