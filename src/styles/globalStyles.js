import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: medium, -apple-system, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EAEAEA;
  }

  #__next {
    width: 100%;
    height: 100%;
    background: white;
  }
`;

export default GlobalStyle;
