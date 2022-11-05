import {makeAutoObservable} from "mobx";
import {calculateResult, percentage} from "../utils/calculation.js";


class CalculatorStore {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  result = "0";
  resultHighlight = false;

  constructor() {
    makeAutoObservable(this);
  }


  inputValue(value) {
    const prevCurrentOperand = this.currentOperand;
    if (this.resultHighlight) {
      this.previousOperand = "";
      this.currentOperand = "";
      this.operator = "";
    }

    if (value !== 0 || prevCurrentOperand !== "0") {
      this.currentOperand = `${prevCurrentOperand}${value}`;
    }
    this.resultHighlight = false;
  }


  inputOperator(value) {
    if (this.currentOperand.slice(-1) === ".")
      return;

    if (this.previousOperand || this.currentOperand) {
      this.operator = value;
      this.resultHighlight = false;
    }

    if (!this.previousOperand) {
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }

    if (this.previousOperand && this.currentOperand) {
      this.previousOperand = this.result;
      this.currentOperand = "";
    }
  }


  inputDot() {
    this.resultHighlight = false;
    if (this.currentOperand === "") {
      this.currentOperand = "0.";
    } else if (!this.currentOperand.includes(".")) {
      this.currentOperand = this.currentOperand + ".";
    }
  }


  inputPercent() {
    this.currentOperand = percentage(this.currentOperand, this.previousOperand).toString();
  }


  updateResult() {
    this.result = calculateResult(this.previousOperand, this.currentOperand, this.operator).toString();
    if (!this.previousOperand && !this.currentOperand)
      this.resultHighlight = false;
  }


  backspace() {
    if (!this.currentOperand && this.operator) {
      this.operator = "";
      this.currentOperand = this.previousOperand;
      this.previousOperand = "";
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }


  setResultHighlight() {
    if (this.previousOperand && this.currentOperand && this.operator)
      this.resultHighlight = true;
  }


  clear() {
    this.previousOperand = "";
    this.currentOperand = "";
    this.operator = "";
    this.result = "0";
    this.resultHighlight = false;
  }

}

export default new CalculatorStore();