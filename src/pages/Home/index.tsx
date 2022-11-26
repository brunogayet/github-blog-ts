import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Profile } from './components/Profile'
import { api } from '../../lib/axios'
import { CardIssue } from './components/CardIssues'
import { SearchForm } from './components/SearchForm'

import { GridIssues, HomeContent } from './styles'

export interface ItemsProps {
  number: number
  title: string
  body: string
  created_at: string
}

export function Home() {
  const [issues, setIssues] = useState<ItemsProps[]>([])

  const fetchIssues = useCallback(async (query: string = '') => {
    const {
      data: { items },
    } = await api.get('/search/issues', {
      params: {
        q: `${query} repo:${import.meta.env.VITE_GITHUB_USERNAME}/${
          import.meta.env.VITE_GITHUB_REPO
        }`,
      },
    })

    /* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
    const listIssues = items.map(
      ({ number, title, body, created_at }: ItemsProps) => {
        return {
          number,
          title,
          body,
          created_at,
        }
      },
    )

    setIssues(listIssues)
  }, [])

  const totalItems = issues.length

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <>
      <Profile />

      <HomeContent>
        <header>
          <h3>Publicações</h3>
          <span>
            {totalItems} {totalItems > 1 ? 'publicações' : 'publicação'}
          </span>
        </header>

        <SearchForm fetchIssues={fetchIssues} />

        <GridIssues>
          {issues.map((issue) => (
            <Link key={issue.number} to={`/post/${issue.number}`}>
              <CardIssue data={issue} />
            </Link>
          ))}
        </GridIssues>
      </HomeContent>
    </>
  )
}
