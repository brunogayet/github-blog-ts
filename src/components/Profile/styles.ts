import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  margin-top: -5.25rem;
  padding: 2rem;

  background: ${(props) => props.theme['cs-base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`
export const ProfileContent = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2rem;

  img {
    width: 148px;
    height: 148px;

    align-self: flex-start;

    border-radius: 8px;

    object-fit: cover;
    object-position: 50% 50%;
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${(props) => props.theme['cs-base-title']};
      font-size: ${(props) => props.theme['ts-title-L']};
      font-weight: bold;
      line-height: 130%;
    }

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

    > div {
      border-top: 1px solid transparent;

      padding: 0.21875rem 0;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme['cs-brand-blue']};
      }
    }
  }

  > p {
    color: ${(props) => props.theme['cs-base-text']};
    font-size: ${(props) => props.theme['ts-text-M']};
    line-height: 160%;
  }

  footer {
    padding-top: 1.5rem;
    display: flex;
    gap: 1.5rem;

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['cs-base-label']};
        font-size: 18px;
      }

      span {
        color: ${(props) => props.theme['cs-base-subtitle']};
        font-size: ${(props) => props.theme['ts-text-M']};
        line-height: 160%;
      }
    }
  }
`
