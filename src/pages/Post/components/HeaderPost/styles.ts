import styled from 'styled-components'
import {
  ProfileContainer,
  ProfileFooter,
} from '../../../Home/components/Profile/styles'

export const HeaderPostContainer = styled(ProfileContainer)``

export const HeaderPostContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      border-bottom: 1px solid transparent;

      padding: 0.21875rem 0;
      transition: border-color 0.2s;

      a {
        color: ${(props) => props.theme['cs-brand-blue']};
        font-size: ${(props) => props.theme['ts-link']};
        text-decoration: none;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
          font-weight: bold;
        }
      }

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['cs-brand-blue']};
      }
    }
  }

  > h1 {
    margin-top: 0.75rem;

    color: ${(props) => props.theme['cs-base-title']};
    font-size: ${(props) => props.theme['ts-title-L']};
    font-weight: bold;
    line-height: 130%;
  }
`

export const HeaderPostFooter = styled(ProfileFooter)`
  padding: 0rem;
  gap: 2rem;

  > div {
    span {
      color: ${(props) => props.theme['cs-base-span']};
    }
  }
`
