import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap');
  ${reset};
  
  * {
  box-sizing: border-box;
  

  }
  a {
  text-decoration: none;
  color: inherit;
  }
  img {
    max-width: 100%;
  }
  button,
  input {
    outline: 0;
    border: 0;
    background: none;
    font-family: inherit;
    padding: 0;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Noto Sans KR', sans-serif;
    color: #111111;
    /* font-family:"Fugaz One", cursive; */
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  h1 {
    font-family: 'Fugaz One', cursive;
  }
`;

export const theme = {
  themeLightBlue: "#115DCB",
  themeDarkBlue: "#0D498B",
  flex: (justify = null, align = null, direction = null) => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `,
};
