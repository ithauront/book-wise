import { Check, X } from 'phosphor-react'
import {
  ContainerForm,
  CommentInput,
  CharCounter,
  ButtonsContainer,
  IconButton,
} from './styles'
import { useForm } from 'react-hook-form'

interface TextInputProps {
  placeholder: string
  onSubmit: (data: { comment: string }) => void
  onClose: () => void
}

export function TextInput({ onSubmit, placeholder, onClose }: TextInputProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<{ comment: string }>()
  const commentValue = watch('comment') || ''
  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <CommentInput
        maxLength={450}
        placeholder={placeholder}
        {...register('comment')}
      />
      <CharCounter>{`${commentValue.length}/450`}</CharCounter>
      <ButtonsContainer>
        <IconButton onClick={onClose}>
          <X size={24} />
        </IconButton>
        <IconButton variant="submit" type="submit" disabled={isSubmitting}>
          <Check size={24} />
        </IconButton>
      </ButtonsContainer>
    </ContainerForm>
  )
}
