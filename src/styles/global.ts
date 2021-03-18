import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
        url('/fonts/montserrat-v15-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.font.family};
    }

    button {
      cursor: pointer;
    }

    .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-color: ${theme.colors.mainBg};
      padding: 4rem;
      position: relative;
      border-radius: ${theme.border.radius};

      display: flex;
      flex-direction: column;

      /* Botao para fechar o modal */
      button[type='button'] {
        position: absolute;
        border: 0;
        width: 2rem;
        top: 1.6rem;
        right: 1.6rem;
        background: transparent;
        color: ${theme.colors.textBody};

        svg {
          transition: color 0.2s;

          &:hover {
            color: ${theme.colors.textTitle};
          }
        }
      }
    }
  `}


`;

export default GlobalStyles;
