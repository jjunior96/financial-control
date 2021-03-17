import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.grid.gap};
    margin-top: -10rem;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 2.4rem 3rem;
    border-radius: 0.4rem;
    color: ${theme.colors.textTitle};

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      /* Strong, por padrao, é display: inline,
      só que para usar margin-top, é preciso ser display: block
     */
      display: block;
      margin-top: 1.6rem;
      font-size: 2.8rem;
      line-height: 3rem;
    }

    &:last-child {
      background-color: ${theme.colors.green};
      color: ${theme.colors.white};
    }
  `}
`;
