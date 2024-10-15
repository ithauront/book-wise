import Image from 'next/image'
import { Avatar } from '../../components/Avatar/Avatar.component'
import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import { StarReview } from '../../components/StarReview/StarReview.component'
import {
  TrendingBooks,
  MainContainer,
  MyBooks,
  StartContainer,
  StyledChartLineUp,
  SessionTitle,
  AsideContainer,
  BookBox,
  BookBoxHeader,
  BookReview,
} from './styles'

import BookCover from '../../../public/assets/fragmentos-do-horror.png'

// TODO add the href to explore page
export default function Sart() {
  return (
    <StartContainer>
      <Sidebar />

      <MainContainer>
        <p>
          <StyledChartLineUp size={32} />
          Início
        </p>
        <MyBooks>
          <SessionTitle>
            <p>Adiçoes recentes</p>
            <a>Ver todos &gt; </a>
          </SessionTitle>
          <BookBox>
            <BookBoxHeader>
              <Avatar src="https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4" />

              <div>
                <h3>Iuri Reis</h3>
                <p>Hoje</p>
              </div>

              <StarReview review={4} />
            </BookBoxHeader>
            <BookReview>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto.
                </p>
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookBoxHeader>
              <Avatar src="https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4" />

              <div>
                <h3>Iuri Reis</h3>
                <p>Hoje</p>
              </div>

              <StarReview review={4} />
            </BookBoxHeader>
            <BookReview>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto.
                </p>
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookBoxHeader>
              <Avatar src="https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4" />

              <div>
                <h3>Iuri Reis</h3>
                <p>Hoje</p>
              </div>

              <StarReview review={4} />
            </BookBoxHeader>
            <BookReview>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto.
                </p>
              </section>
            </BookReview>
          </BookBox>
          <BookBox>
            <BookBoxHeader>
              <Avatar src="https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4" />

              <div>
                <h3>Iuri Reis</h3>
                <p>Hoje</p>
              </div>

              <StarReview review={4} />
            </BookBoxHeader>
            <BookReview>
              <Image src={BookCover} alt="Book cover" />
              <section>
                <div>
                  <h3>Fragmentos do horror</h3>
                  <p>Junji Ito</p>
                </div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto.
                </p>
              </section>
            </BookReview>
          </BookBox>
        </MyBooks>
      </MainContainer>

      <AsideContainer>
        <SessionTitle>
          <p>Livros populares</p>
          <a>Ver todos &gt; </a>
        </SessionTitle>
        <TrendingBooks>
          <BookBox>
            <BookReview isSummary>
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
            <BookReview isSummary>
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
            <BookReview isSummary>
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
            <BookReview isSummary>
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
        </TrendingBooks>
      </AsideContainer>
    </StartContainer>
  )
}
