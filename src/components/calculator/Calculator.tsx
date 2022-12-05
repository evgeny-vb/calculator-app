import Header from "../header/Header";
import Body from "../body/Body";
import UiState from "../../store/uiState";
import {CalculatorWrapper, Calculator as CalculatorStyled} from "./Calculator.styles";

const Calculator = () => {
  const toggleThemeHandler = () => {
    UiState.toggleTheme();
  };

  return (
    <CalculatorWrapper>
      <CalculatorStyled>
        <Header/>
        <Body toggleThemeHandler={toggleThemeHandler}/>
      </CalculatorStyled>
    </CalculatorWrapper>
  );
};

export default Calculator;