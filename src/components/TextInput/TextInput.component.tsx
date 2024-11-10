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
// TODO no issubmiting desabilitar o butão de envio. apos submitar talvez dar uma msg de seu comentario foi bem registrado. e fechar a aba de comentario. ou apenas fechar a aba e ostrar o comentario novo na lista.

export function TextInput({ onSubmit, placeholder, onClose }: TextInputProps) {
  const { register, handleSubmit, watch } = useForm<{ comment: string }>()
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
        <IconButton variant="submit" type="submit">
          <Check size={24} />
        </IconButton>
      </ButtonsContainer>
    </ContainerForm>
  )
}
