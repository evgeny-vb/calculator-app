export const calculatorOperations = {
  "/": (previousOperand, currentOperand) => previousOperand / currentOperand,
  "*": (previousOperand, currentOperand) => previousOperand * currentOperand,
  "-": (previousOperand, currentOperand) => previousOperand - currentOperand,
  "+": (previousOperand, currentOperand) => previousOperand + currentOperand,
};

const roundNumber = (num, scale) => {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    const arr = ("" + num).split("e");
    let sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
};

export const calculateResult = (previousOperand, currentOperand, operator) => {
  if (!previousOperand && !currentOperand)
    return 0;

  if (operator && previousOperand && !currentOperand)
    return parseFloat(previousOperand);

  if (!operator && (previousOperand || currentOperand))
    return parseFloat(previousOperand) || parseFloat(currentOperand);

  if (previousOperand && currentOperand && operator)
    return roundNumber(calculatorOperations[operator](parseFloat(previousOperand), parseFloat(currentOperand)), 10);
};

export const percentage = (partialValue, totalValue) => {
  totalValue ||= 1;
  return roundNumber((totalValue / 100) * partialValue, 10).toString();
};
