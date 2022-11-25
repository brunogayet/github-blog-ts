import { Profile } from '../../components/Profile'
import { CardIssues } from './components/CardIssues'
import { SearchForm } from './components/SearchForm'

import { GridIssues, HomeContainer } from './styles'

export function Home() {
  return (
    <div>
      <Profile />

      <HomeContainer>
        <header>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </header>

        <SearchForm />

        <GridIssues>
          <CardIssues />
          <CardIssues />
          <CardIssues />
          <CardIssues />
          <CardIssues />
          <CardIssues />
        </GridIssues>
      </HomeContainer>
    </div>
  )
}
