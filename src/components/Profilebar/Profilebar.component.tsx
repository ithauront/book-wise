import {
  BookmarkSimple,
  BookOpen,
  Books,
  SmileySad,
  UserList,
} from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar.component'
import {
  ProfilebarContainer,
  ProfileInfo,
  Separator,
  UserHeader,
} from './styles'
import dayjs from 'dayjs'
import { Rating, User as UserType } from '../../pages/types'
import { findMostReadCategories } from './Profilebar.utils'

interface ProfilebarProps {
  user: UserType | null
}

export function Profilebar({ user }: ProfilebarProps) {
  const uniqueRatings =
    user?.Rating?.reduce<Rating[]>((acc, rating) => {
      const alreadyExists = acc.some(
        (item) => item.book?.id === rating.book?.id,
      )

      if (!alreadyExists) {
        acc.push(rating)
      }

      return acc
    }, []) || []

  const userCreatedAtDate = dayjs(user?.created_at).format('YYYY')

  const totalPages = uniqueRatings.reduce((acc, item) => {
    const pages = item.book?.total_pages || 0
    return acc + pages
  }, 0)

  const totalAuthors = new Set(
    uniqueRatings
      .map((rating) => rating.book?.author)
      .filter((author) => author),
  ).size

  const { isTied, category } = findMostReadCategories(uniqueRatings || [])

  return (
    <ProfilebarContainer>
      <Avatar size="lg" src={user?.avatar_url || ''} alt="Avatar do usuário" />
      <UserHeader>
        <h3>{user?.name}</h3>
        <p>membro desde {userCreatedAtDate}</p>
      </UserHeader>

      <Separator />

      {user?.Rating?.length === 0 ? (
        <ProfileInfo>
          <SmileySad size={32} />
          <div>
            <h3>Nenhum livro avaliado</h3>
          </div>
        </ProfileInfo>
      ) : (
        <>
          <ProfileInfo>
            <BookOpen size={32} />
            <div>
              <h3>{totalPages}</h3>
              <p>Páginas lidas</p>
            </div>
          </ProfileInfo>
          <ProfileInfo>
            <Books size={32} />
            <div>
              <h3>{uniqueRatings.length}</h3>
              <p>Livros avaliados</p>
            </div>
          </ProfileInfo>
          <ProfileInfo>
            <UserList size={32} />
            <div>
              <h3>{totalAuthors}</h3>
              <p>Autores lidos</p>
            </div>
          </ProfileInfo>
          <ProfileInfo>
            <BookmarkSimple size={32} />
            <div>
              <h3>{category}</h3>
              <p>Categoria mais lida</p>
              {isTied && (
                <p className="tiedText">*Empate com outras categorias</p>
              )}
            </div>
          </ProfileInfo>
        </>
      )}
    </ProfilebarContainer>
  )
}
