import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 4.5rem auto 0;

  header {
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
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;

  margin: 3rem 0 14.625rem;
`
