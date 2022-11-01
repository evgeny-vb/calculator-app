import {calculateResult, percentage} from "../utils/calculation.js";

export const initialCalculationState = {
  previousOperand: "",
  currentOperand: "",
  operator: "",
  result: "0",
  resultHighlight: false
};

const CALCULATION_ACTIONS = {
  inputValue: "INPUT_VALUE",
  inputOperator: "INPUT_OPERATOR",
  inputDot: "INPUT_DOT",
  inputPercent: "INPUT_PERCENT",
  updateResult: "UPDATE_RESULT",
  backspace: "BACKSPACE",
  resultHighlight: "RESULT_HIGHLIGHT",
  clear: "CLEAR"
};

export const calculationReducer = (state, action) => {
  const payload = action.payload;
  const newState = {...state};

  switch (action.type) {
    case CALCULATION_ACTIONS.inputValue:
      newState.resultHighlight = false;
      if (state.resultHighlight) {
        newState.previousOperand = "";
        newState.currentOperand = "";
        newState.operator = "";
      }

      if (payload !== 0 || state.currentOperand !== "0") {
        newState.currentOperand = `${state.currentOperand}${payload}`;
      }
      return newState;

    case CALCULATION_ACTIONS.inputOperator:
      newState.operator = payload;
      newState.resultHighlight = false;

      if (!state.previousOperand) {
        newState.previousOperand = state.currentOperand;
        newState.currentOperand = "";
      }

      if (state.operator) {
        newState.previousOperand = state.result;
        newState.currentOperand = "";
      }
      return newState;

    case CALCULATION_ACTIONS.inputDot:
      newState.resultHighlight = false;
      if (!state.currentOperand.includes(".")) {
        newState.currentOperand = state.currentOperand + ".";
      }
      return newState;

    case CALCULATION_ACTIONS.inputPercent:
      newState.currentOperand = percentage(state.currentOperand, state.previousOperand);
      return newState;

    case CALCULATION_ACTIONS.updateResult:
      newState.result = calculateResult(state.previousOperand, state.currentOperand, state.operator);
      if (!state.previousOperand && !state.currentOperand)
        newState.resultHighlight = false;
      return newState;

    case CALCULATION_ACTIONS.backspace:
      if (state.currentOperand.length === 0 && state.operator) {
        newState.operator = "";
        newState.previousOperand = "";
        newState.currentOperand = state.previousOperand;
      } else {
        newState.currentOperand = state.currentOperand.slice(0, -1);
      }
      return newState;

    case CALCULATION_ACTIONS.resultHighlight:
      if (state.previousOperand && state.currentOperand && state.operator)
        newState.resultHighlight = true;
      return newState;
    case CALCULATION_ACTIONS.clear:
    default:
      return initialCalculationState;
  }
};

export const mapDispatch = dispatch => ({
  inputValue: (val) => dispatch({type: CALCULATION_ACTIONS.inputValue, payload: val}),
  inputOperator: (val) => dispatch({type: CALCULATION_ACTIONS.inputOperator, payload: val}),
  inputDot: () => dispatch({type: CALCULATION_ACTIONS.inputDot}),
  inputPercent: () => dispatch({type: CALCULATION_ACTIONS.inputPercent}),
  updateResult: () => dispatch({type: CALCULATION_ACTIONS.updateResult}),
  backspace: () => dispatch({type: CALCULATION_ACTIONS.backspace}),
  resultHighlight: () => dispatch({type: CALCULATION_ACTIONS.resultHighlight}),
  clear: () => dispatch({type: CALCULATION_ACTIONS.clear}),
});

export default calculationReducer;