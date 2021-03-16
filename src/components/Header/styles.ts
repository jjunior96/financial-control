import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    width: 100%;
    height: 10rem;

    display: flex;
    align-items: center;
  `}
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1140px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Logo = styled.div``;

export const Button = styled.button``;
