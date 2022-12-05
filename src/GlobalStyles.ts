import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    line-height: 1;
    font-weight: 400;
    background-color: #495057;
  }

  html, body, #root { height: 100% }
`
