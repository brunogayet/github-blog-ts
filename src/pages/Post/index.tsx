import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

import { api } from '../../lib/axios'

import { HeaderPost } from './components/HeaderPost'
import { PostContent } from './styles'

import { dateToNow } from '../../utils/formatter'
export interface PostProps {
  title: string
  loginUser: string
  body: string
  comments: number
  link: string
  created_at: string
}

export function Post() {
  const { issueNumber } = useParams()

  const [issue, setIssue] = useState<PostProps>({} as PostProps)

  const fetchIssue = async (number: string) => {
    const { data } = await api.get(
      `/repos/${import.meta.env.VITE_GITHUB_USERNAME}/${
        import.meta.env.VITE_GITHUB_REPO
      }/issues/${issueNumber}`,
    )

    /* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */
    const {
      title,
      user: { login: loginUser },
      body,
      html_url: link,
      created_at,
      comments,
    } = data

    setIssue({
      title,
      loginUser,
      body,
      comments,
      link,
      created_at: dateToNow(created_at),
    })
  }

  useEffect(() => {
    fetchIssue(issueNumber!)
  }, [])

  return (
    <>
      <HeaderPost issue={issue} />

      <PostContent>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {issue.body}
        </ReactMarkdown>
      </PostContent>
    </>
  )
}
