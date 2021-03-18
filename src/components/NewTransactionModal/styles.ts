import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.textTitle};
      font-size: 2.4rem;
      margin-bottom: 3.2rem;
    }

    input {
      width: 100%;
      padding: 0 1.6rem;
      height: 5rem;
      border-radius: ${theme.border.radius};

      border: 1px solid #d7d7d7;
      background-color: #e7e9ee;

      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.medium};

      &::placeholder {
        color: ${theme.colors.textBody};
      }

      & + input {
        margin-top: 1.6rem;
      }
    }

    button[type='submit'] {
      width: 100%;
      padding: 0 1.8rem;
      height: 5.6rem;
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
      border: 0;
      font-size: ${theme.font.sizes.medium};
      margin-top: 1.6rem;
      font-weight: ${theme.font.bold};
      transition: background-color 0.3s;

      &:hover {
        background-color: ${shade(0.2, theme.colors.green)};
      }
    }
  `}
`;
