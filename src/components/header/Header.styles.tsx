import styled, {css} from "styled-components";

const highlightStyles = css`
  color: ${({theme}) => theme.colors.textMain};
  font-size: 4rem;
  font-weight: 500;
`

export const CalculatorHeader = styled.header`
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1.6rem;
  padding: 1.2rem 2.4rem;
  flex-grow: 1;

  font-size: 2.6rem;
  color: ${({theme}) => theme.colors.textShade};

  background-color: ${({theme}) => theme.colors.headerBackground};
  transition: all 0.3s;
`

type CalculatorFormulaProps = {
  highlight: boolean
}

export const CalculatorFormula = styled.div<CalculatorFormulaProps>`
  min-height: 4rem;  
  ${({highlight}) => highlight && highlightStyles}
`

type CalculatorResultProps = {
  highlight: boolean
}

export const CalculatorResult = styled.div<CalculatorResultProps>`
  min-height: 4rem;
  ${({highlight}) => highlight && highlightStyles}
`
