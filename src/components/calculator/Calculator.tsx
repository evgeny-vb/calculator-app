import Header from "../header/Header";
import Body from "../body/Body";
import {CalculatorWrapper, Calculator as CalculatorStyled} from "./Calculator.styles";

const Calculator = () => {
  return (
    <CalculatorWrapper>
      <CalculatorStyled>
        <Header/>
        <Body/>
      </CalculatorStyled>
    </CalculatorWrapper>
  );
};

export default Calculator;