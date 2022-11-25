import styled from 'styled-components'
import coverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background: url(${coverImg}) top center no-repeat;
  background-size: cover;

  height: 296px;
`
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  padding: 4rem 2rem;

  display: flex;
  justify-content: center;
`
