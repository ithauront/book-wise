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
}
// TODO fazer os butões de enviar e o x para fexar o comentario.
// TODO fazer a validação do tamanho do input, e colocar o charcounter para contar corretamente
export function TextInput({ onSubmit, placeholder }: TextInputProps) {
  const { register, handleSubmit } = useForm<{ comment: string }>()
  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <CommentInput placeholder={placeholder} {...register('comment')} />
      <CharCounter>0/300</CharCounter>
      <ButtonsContainer>
        <IconButton>
          <X size={24} />
        </IconButton>
        <IconButton variant="submit">
          <Check size={24} />
        </IconButton>
      </ButtonsContainer>
    </ContainerForm>
  )
}
