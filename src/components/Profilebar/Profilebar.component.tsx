import { BookmarkSimple, BookOpen, Books, User, UserList } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar.component'
import {
  ProfilebarContainer,
  ProfileInfo,
  Separator,
  UserHeader,
} from './styles'
import dayjs from 'dayjs'

interface User {
  name: string | null
  avatar_url: string | null
  created_at: Date | null
} // TODO receber como props total de paginas lidas// total de livros avaliados // total de autores avaliados // categoria mais lida

interface ProfilebarProps {
  user: User | null
}

export function Profilebar({ user }: ProfilebarProps) {
  const userCreatedAtDate = dayjs(user?.created_at).format('YYYY')

  return (
    <ProfilebarContainer>
      <Avatar size="lg" src={user?.avatar_url || ''} alt="Avatar do usuário" />
      <UserHeader>
        <h3>{user?.name}</h3>
        <p>membro desde {userCreatedAtDate}</p>
      </UserHeader>

      <Separator />

      <ProfileInfo>
        <BookOpen size={32} />
        <div>
          <h3>3853</h3>
          <p>Páginas lidas</p>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <Books size={32} />
        <div>
          <h3>10</h3>
          <p>Livros avaliados</p>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <UserList size={32} />
        <div>
          <h3>8</h3>
          <p>Autores lidos</p>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <BookmarkSimple size={32} />
        <div>
          <h3>Computação</h3>
          <p>Categoria mais lida</p>
        </div>
      </ProfileInfo>
    </ProfilebarContainer>
  )
}
