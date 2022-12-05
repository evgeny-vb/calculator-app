import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      mainBg: string;
      headerBg: string;
      buttonsBg: string;
      btnBg: string;
      btnHover: string;
      btnEqual: string;
      btnEqualHover: string;
      color: string;
      colorShade: string;
      symbolColor: string;
    }
  }
}