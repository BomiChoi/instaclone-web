import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "rgb(219, 219, 219)",
  facebook: "#385285",
};

export const darkTheme = {
  accent: "#0095f6",
  fontColor: "white",
  bgColor: "#2c2c2c",
  borderColor: "rgb(219, 219, 219)",
  facebook: "#0095f6",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
      box-sizing:border-box;
    }
    body {
        background-color: ${props => props.theme.bgColor};
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color: ${props => props.theme.fontColor};
    }
    input {
      all:unset;
    }
    a {
      text-decoration: none;
    }
`;