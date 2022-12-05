import {DefaultTheme} from "styled-components";

export const light: DefaultTheme = {
  name: "light-theme",
  colors: {
    mainBg: "#66d9e8",
    headerBg: "rgba(0, 0, 0, 0.1)",
    buttonsBg: "rgba(33, 37, 41, 0.3)",
    btnBg: "#c5f6fa",
    btnHover: "rgba(153, 233, 242, 0.3)",
    btnEqual: "#66d9e8",
    btnEqualHover: "rgba(102, 217, 232, 0.4)",
    color: "#343a40",
    colorShade: "#484e53",
    symbolColor: "#014653"
  }
}

export const dark: DefaultTheme = {
  name: "dark-theme",
  colors: {
    mainBg: "rgba(11, 115, 133, 0.3)",
    headerBg: "rgba(0, 0, 0, 0.15)",
    buttonsBg: "rgba(33, 37, 41, 0.9)",
    btnBg: "#343a40",
    btnHover: "rgba(52, 58, 64, 0.2)",
    btnEqual: "rgba(11, 115, 133, 0.4)",
    btnEqualHover: "rgba(11, 115, 133, 0.1)",
    color: "#f8f9fa",
    colorShade: "#c6c7c8",
    symbolColor: "#15aabf"
  }
}
