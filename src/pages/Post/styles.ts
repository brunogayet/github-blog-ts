import styled from 'styled-components'

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  p:not(:first-child) {
    padding: 1rem 0;
  }

  p,
  blockquote p {
    line-height: 25.6px;

    img {
      max-width: 100%;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme['cs-brand-blue']};
    }
  }

  h2 {
    padding: 1rem 0 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme['cs-base-border']};
  }
`
