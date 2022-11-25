import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  margin-top: 0.75rem;

  input {
    width: 100%;
    background: ${(props) => props.theme['cs-base-input']};
    color: ${(props) => props.theme['cs-base-text']};
    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['cs-base-border']};

    &::placeholder {
      color: ${(props) => props.theme['cs-base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['cs-brand-blue']};
    }
  }
`
