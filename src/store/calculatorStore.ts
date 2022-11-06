import {makeAutoObservable} from "mobx";
import {calculateResult, percentage} from "../utils/calculation";


class CalculatorStore {
  previousOperand = "";
  currentOperand = "";
  operator = "";
  result = "0";
  resultHighlight = false;

  constructor() {
    makeAutoObservable(this);
  }


  inputNumber(num: number | string) {
    const prevCurrentOperand = this.currentOperand;
    if (this.resultHighlight) {
      this.previousOperand = "";
      this.currentOperand = "";
      this.operator = "";
    }

    if (num !== 0 || prevCurrentOperand !== "0") {
      this.currentOperand = `${prevCurrentOperand}${num}`;
    }
    this.resultHighlight = false;
  }


  inputOperator(operator: string) {
    if (this.currentOperand.slice(-1) === ".")
      return;

    if (this.previousOperand || this.currentOperand) {
      this.operator = operator;
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
    this.currentOperand = percentage(parseFloat(this.currentOperand), parseFloat(this.previousOperand)).toString();
  }


  updateResult() {
    this.result = calculateResult(parseFloat(this.previousOperand), parseFloat(this.currentOperand), this.operator).toString();
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