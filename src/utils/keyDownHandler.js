import {calculatorOperations} from "./calculation.js";

const keyDownHandler = (event, calculationActions) => {
  let {key} = event;

  if (key === "Enter") {
    event.preventDefault();
    calculationActions.resultHighlight();
  } else if ((/^\d/).test(key)) {
    event.preventDefault();
    calculationActions.inputValue(parseInt(key, 10));
  } else if (key in calculatorOperations) {
    event.preventDefault();
    calculationActions.inputOperator(key);
  } else if (key === ".") {
    event.preventDefault();
    calculationActions.inputDot();
  } else if (key === "%") {
    event.preventDefault();
    calculationActions.inputPercent();
  } else if (key === "Backspace") {
    event.preventDefault();
    calculationActions.backspace();
  } else if (["Clear", "Escape", "Delete"].includes(key)) {
    event.preventDefault();
    calculationActions.clear();
  }
};

export default keyDownHandler;