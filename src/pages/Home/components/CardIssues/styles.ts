import styled from 'styled-components'

export const CardIssuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  height: 260px;

  background: ${(props) => props.theme['cs-base-post']};
  border-radius: 10px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 1rem;

    h2 {
      flex: 1;
      color: ${(props) => props.theme['cs-base-title']};
      font-size: ${(props) => props.theme['ts-title-M']};
      line-height: 160%;
    }

    span {
      padding-top: 0.35rem;
      color: ${(props) => props.theme['cs-base-span']};
      font-size: ${(props) => props.theme['ts-text-S']};
      line-height: 160%;
    }
  }

  p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['cs-base-text']};
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
