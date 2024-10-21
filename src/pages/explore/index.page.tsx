import Image from 'next/image'
import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import { StarReview } from '../../components/StarReview/StarReview.component'

import BookCover from '../../../public/assets/fragmentos-do-horror.png'
import { useSession } from 'next-auth/react'
import {
  ExploreContainer,
  ExploreContent,
  MainContainer,
  StyledBinocular,
  TitleContainer,
} from './styles'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { BookBox, BookReview } from '../start/styles'

export default function Explore() {
  const { data: session } = useSession()

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.image || undefined,
      }
    : null

  return (
    <ExploreContainer>
      <Sidebar isLoggedIn={!!session} user={user} />

      <MainContainer>
        <TitleContainer>
          <p>
            <StyledBinocular size={32} />
            Explorar
          </p>
          <SearchBar
            placeholder="Buscar livro ou autor"
            onSubmit={() => console.log('buscado')}
          />
        </TitleContainer>
        <div>Badges</div>
        <ExploreContent>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookReview isExplore>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>

                <StarReview review={3} />
              </section>
            </BookReview>
          </BookBox>
        </ExploreContent>
      </MainContainer>
    </ExploreContainer>
  )
}
