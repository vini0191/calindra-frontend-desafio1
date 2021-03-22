import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    background:#cbcbc9;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
