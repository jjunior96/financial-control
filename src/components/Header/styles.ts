import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    width: 100%;

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
  padding: 0 1.6rem 10rem;
`;

export const Logo = styled.div``;

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.white};
    background-color: ${theme.colors.blueLight};
    border: 0;
    padding: 0 3.2rem;
    border-radius: 0.4rem;
    height: 4.4rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.1, theme.colors.blueLight)};
    }
  `}
`;
