export const calculatorOperations = {
  "/": (previousOperand, currentOperand) => previousOperand / currentOperand,
  "*": (previousOperand, currentOperand) => previousOperand * currentOperand,
  "-": (previousOperand, currentOperand) => previousOperand - currentOperand,
  "+": (previousOperand, currentOperand) => previousOperand + currentOperand,
};

export const calculateResult = (previousOperand, currentOperand, operator) => {
  if (!previousOperand && !currentOperand)
    return 0;

  if (operator && previousOperand && !currentOperand)
    return previousOperand;

  if (!operator && (previousOperand || currentOperand))
    return previousOperand || currentOperand;

  if (previousOperand && currentOperand && operator)
    return calculatorOperations[operator](parseFloat(previousOperand), parseFloat(currentOperand));
};

export const percentage = (partialValue, totalValue) => {
  totalValue ||= 1;
  return (totalValue / 100) * partialValue;
};
