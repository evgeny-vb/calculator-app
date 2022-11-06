import {calculatorOperations} from "./calculation";
import calculatorStore from "../store/calculatorStore";

const keyDownHandler = (event: KeyboardEvent) => {
  let {key} = event;

  if (key === "Enter") {
    event.preventDefault();
    calculatorStore.setResultHighlight();
  } else if ((/^\d/).test(key)) {
    event.preventDefault();
    calculatorStore.inputNumber(parseInt(key, 10));
  } else if (key in calculatorOperations) {
    event.preventDefault();
    calculatorStore.inputOperator(key);
  } else if (key === ".") {
    event.preventDefault();
    calculatorStore.inputDot();
  } else if (key === "%") {
    event.preventDefault();
    calculatorStore.inputPercent();
  } else if (key === "Backspace") {
    event.preventDefault();
    calculatorStore.backspace();
  } else if (["Clear", "Escape", "Delete"].includes(key)) {
    event.preventDefault();
    calculatorStore.clear();
  }
};

export default keyDownHandler;