import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Rubik', sans-serif;
    box-sizing: border-box;
    outline: none;
  }

  button:focus {
    outline: none;
  }

  button:focus-visible {
    outline: 2px solid black;
  }

  html, body {
    position: relative;
    margin: 0px;
    height: 100vh;
  }
`;
 
export default GlobalStyle;