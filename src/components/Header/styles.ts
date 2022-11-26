import styled from 'styled-components'
import coverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background: url(${coverImg}) center no-repeat;
  background-size: cover;

  height: 296px;
`
export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;

  padding: 4rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
