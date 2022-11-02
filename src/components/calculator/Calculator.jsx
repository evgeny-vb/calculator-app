import React, {useCallback, useEffect, useReducer, useState} from "react";
import "./Calculator.css";
import {calculationReducer, mapDispatch, initialCalculationState} from "../../reducers/calculation.js";
import keyDownHandler from "../../utils/keyDownHandler.js";
import Header from "./Header.jsx";
import Body from "./Body.jsx";


const Calculator = () => {
  const [lightTheme, setLightTheme] = useState(false);
  const [calculationState, dispatchCalculation] = useReducer(calculationReducer, initialCalculationState);
  const calculationActions = mapDispatch(dispatchCalculation);

  const {previousOperand, currentOperand, operator} = calculationState;


  const keyDownHandlerCB = useCallback((event) => {
    keyDownHandler(event, calculationActions);
  }, [calculationActions]);

  useEffect(() => {
    calculationActions.updateResult();
  }, [previousOperand, currentOperand, operator]);

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandlerCB);

    return () => document.removeEventListener("keydown", keyDownHandlerCB);
  }, []);


  const calculatorClass = `calculator ${lightTheme ? "light" : ""}`;

  return (
    <main className="calculator-wrapper">
      <section className={calculatorClass}>
        <Header calculationState={calculationState}/>
        <Body calculationState={calculationState} setLightTheme={setLightTheme}
              calculationActions={calculationActions}/>
      </section>
    </main>
  );
};

export default Calculator;