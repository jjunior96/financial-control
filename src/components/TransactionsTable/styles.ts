import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 5.6rem;
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      color: ${theme.colors.textBody};
      font-weight: 500;
      padding: 1.6rem 3.2rem;
      text-align: left;
      line-height: 3rem;
    }

    td {
      padding: 1.6rem 3.2rem;
      border: 0;
      background-color: ${theme.colors.white};
      color: ${theme.colors.textBody};
      border-radius: ${theme.border.radius};

      &:first-child {
        color: ${theme.colors.textTitle};
      }
    }
  `}
`;
