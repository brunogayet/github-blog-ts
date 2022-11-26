import styled from 'styled-components'

export const HomeContent = styled.main`
  margin: 4.5rem auto 0;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['cs-base-subtitle']};
      font-size: ${(props) => props.theme['ts-title-S']};
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme['cs-base-span']};
      font-size: ${(props) => props.theme['ts-text-S']};
      line-height: 160%;
    }
  }
`

export const GridIssues = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(24.5rem, 1fr));

  gap: 2rem;

  margin: 3rem 0 14.625rem;

  > a {
    text-decoration: none;
  }
`
