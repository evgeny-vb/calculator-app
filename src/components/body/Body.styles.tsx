import styled from "styled-components";

export const CalculatorBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 1rem;
  background-color: ${({theme}) => theme.colors.bodyBackground};
  flex-grow: 1;
  gap: 0.4rem;
  min-height: 38.4rem;

  @media screen and (max-height: 24em) {
    min-height: 10rem;
    flex-shrink: 1;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.6rem;
  height: 100%;
  width: 100%;
  border: none;
  color: ${({theme}) => theme.colors.textMain};
  cursor: pointer;
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.buttonBackground};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  :hover {
    transform: scale(108%);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    background-color: ${({theme}) => theme.colors.buttonHover};
`

export const ButtonSymbol = styled(Button)`
  color: ${({theme}) => theme.colors.symbol};
`

export const ButtonEqual = styled(Button)`
  height: 100%;
  background-color: ${({theme}) => theme.colors.buttonEqual};

  :hover {
    background-color: ${({theme}) => theme.colors.buttonEqualHover};
`
