import React, {useCallback, useEffect} from "react";
import {observer} from "mobx-react-lite";
import calculatorStore from "../../store/calculatorStore";
import keyDownHandler from "../../utils/keyDownHandler";
import {Button, ButtonEqual, ButtonSymbol, CalculatorBody} from "./Body.styles";
import UiState from "../../store/uiState";
import LightThemeSvg from "../assets/LightThemeSvg";
import DarkThemeSvg from "../assets/DarkThemeSvg";
import BackspaceSvg from "../assets/BackspaceSvg";
import DivideSvg from "../assets/DivideSvg";
import MultiplicationSvg from "../assets/MultiplicationSvg";
import MinusSvg from "../assets/MinusSvg";
import PlusSvg from "../assets/PlusSvg";
import PercentageSvg from "../assets/PercentageSvg";
import DotSvg from "../assets/DotSvg";
import EqualSvg from "../assets/EqualSvg";


const Body = observer(() => {
  const {previousOperand, currentOperand} = calculatorStore;

  const keyDownHandlerCB = useCallback((event: KeyboardEvent) => {
    keyDownHandler(event);
  }, [calculatorStore]);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandlerCB);

    return () => {
      document.removeEventListener("keydown", keyDownHandlerCB);
    };
  }, []);

  const toggleThemeHandler = () => {
    UiState.toggleTheme();
  };

  const inputNumber = (num: number) => {
    calculatorStore.inputNumber(num);
  };

  const inputOperator = (operator: string) => {
    calculatorStore.inputOperator(operator);
  };

  const inputDot = () => {
    calculatorStore.inputDot();
  };

  const inputPercent = () => {
    calculatorStore.inputPercent();
  };

  const inputEqual = () => {
    calculatorStore.setResultHighlight();
  };

  const backspace = () => {
    calculatorStore.backspace();
  };

  const clear = () => {
    calculatorStore.clear();
  };

  return (
    <CalculatorBody>
      <ButtonSymbol onClick={clear}>{!previousOperand && !currentOperand ? "AC" : "C"}</ButtonSymbol>

      {/* theme button */}
      <ButtonSymbol onClick={toggleThemeHandler}>
        <LightThemeSvg isDisplayed={UiState.isLightTheme}/>
        <DarkThemeSvg isDisplayed={UiState.isDarkTheme}/>
      </ButtonSymbol>

      {/* backspace */}
      <ButtonSymbol onClick={backspace}>
        <BackspaceSvg/>
      </ButtonSymbol>

      {/* divide */}
      <ButtonSymbol onClick={() => inputOperator("/")}>
        <DivideSvg/>
      </ButtonSymbol>


      <Button onClick={() => inputNumber(7)}>7</Button>
      <Button onClick={() => inputNumber(8)}>8</Button>
      <Button onClick={() => inputNumber(9)}>9</Button>

      <ButtonSymbol onClick={() => inputOperator("*")}>
        <MultiplicationSvg/>
      </ButtonSymbol>


      <Button onClick={() => inputNumber(4)}>4</Button>
      <Button onClick={() => inputNumber(5)}>5</Button>
      <Button onClick={() => inputNumber(6)}>6</Button>

      <ButtonSymbol onClick={() => inputOperator("-")}>
        <MinusSvg/>
      </ButtonSymbol>


      <Button onClick={() => inputNumber(1)}>1</Button>
      <Button onClick={() => inputNumber(2)}>2</Button>
      <Button onClick={() => inputNumber(3)}>3</Button>

      <ButtonSymbol onClick={() => inputOperator("+")}>
        <PlusSvg/>
      </ButtonSymbol>


      {/* Percentage button */}
      <ButtonSymbol onClick={inputPercent}>
        <PercentageSvg/>
      </ButtonSymbol>

      <ButtonSymbol onClick={() => inputNumber(0)}>0</ButtonSymbol>

      {/* Dot button */}
      <ButtonSymbol onClick={inputDot}>
        <DotSvg/>
      </ButtonSymbol>

      {/* Equal button */}
      <ButtonEqual onClick={inputEqual}>
        <EqualSvg/>
      </ButtonEqual>
    </CalculatorBody>
  );
});

export default Body;