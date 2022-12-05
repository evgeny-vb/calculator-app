import styled from "styled-components";

export const CalculatorWrapper = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;

  @media screen and (min-width: 48em) {
    align-items: center;
  }
`

export const Calculator = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  justify-content: center;
  min-width: 23em;
  margin-top: auto;
  overflow: hidden;
  color: ${({theme}) => theme.colors.textMain};

  /* AFTER 768px */
  @media screen and (min-width: 48em) {
    max-width: 48em;
    max-height: 72em;
    margin-top: 0;
  }

  /* PHONE LANDSCAPE */
  @media screen and (max-height: 36.98em) and (orientation: landscape) {
    flex-direction: row;
    max-width: none;
  }
`