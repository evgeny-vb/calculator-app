import {DefaultTheme} from "styled-components";

export const light: DefaultTheme = {
  name: "light-theme",
  colors: {
    headerBackground: "#5cc3d0",
    bodyBackground: "#51a2ae",
    buttonBackground: "#c5f6fa",
    buttonHover: "#67b7c2",
    buttonEqual: "#66d9e8",
    buttonEqualHover: "#5ab8c5",
    textMain: "#343a40",
    textShade: "#484e53",
    symbol: "#014653"
  }
}

export const dark: DefaultTheme = {
  name: "dark-theme",
  colors: {
    headerBackground: "#2e4d56",
    bodyBackground: "#232a2f",
    buttonBackground: "#343a40",
    buttonHover: "#262e33",
    buttonEqual: "#194751",
    buttonEqualHover: "#203238",
    textMain: "#f8f9fa",
    textShade: "#c6c7c8",
    symbol: "#15aabf"
  }
}
