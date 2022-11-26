import { Link } from 'react-router-dom'
import {
  HeaderPostContainer,
  HeaderPostContent,
  HeaderPostFooter,
} from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostProps } from '../..'

interface HeaderPostProps {
  issue: PostProps
}

export function HeaderPost({ issue }: HeaderPostProps) {
  return (
    <HeaderPostContainer>
      <HeaderPostContent>
        <header>
          <div>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </Link>
          </div>
          <div>
            <a href={issue.link} target="_blank" rel="noreferrer">
              <span>VER NO GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </header>

        <h1>{issue.title}</h1>

        <HeaderPostFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.loginUser}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{issue.created_at}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>
              {issue.comments} comentário{issue.comments > 1 && 's'}
            </span>
          </div>
        </HeaderPostFooter>
      </HeaderPostContent>
    </HeaderPostContainer>
  )
}
