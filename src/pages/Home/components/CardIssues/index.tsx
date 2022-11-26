import { dateToNow } from '../../../../utils/formatter'

import { ItemsProps } from '../..'
import { CardIssueContainer } from './styles'

interface CardIssueProps {
  data: ItemsProps
}
/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
export function CardIssue({
  data: { id, title, body, created_at },
}: CardIssueProps) {
  return (
    <CardIssueContainer>
      <header>
        <h2>{title}</h2>
        <span>{dateToNow(created_at)}</span>
      </header>
      <p>{body}</p>
    </CardIssueContainer>
  )
}
