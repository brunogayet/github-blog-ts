import styled from 'styled-components'

export const CardIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  height: 16.25rem;

  background: ${(props) => props.theme['cs-base-post']};
  border: 2px solid transparent;
  border-radius: 10px;

  transition: border 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme['cs-base-label']};
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    gap: 1rem;

    h2 {
      flex: 1;
      color: ${(props) => props.theme['cs-base-title']};
      font-size: ${(props) => props.theme['ts-title-M']};
      line-height: 160%;

      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      padding-top: 0.35rem;
      color: ${(props) => props.theme['cs-base-span']};
      font-size: ${(props) => props.theme['ts-text-S']};
      line-height: 160%;
      max-width: 7rem;
    }
  }

  > p {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['cs-base-text']};

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
