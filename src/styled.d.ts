import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      headerBackground: string;
      bodyBackground: string;
      buttonBackground: string;
      buttonHover: string;
      buttonEqual: string;
      buttonEqualHover: string;
      textMain: string;
      textShade: string;
      symbol: string;
    }
  }
}