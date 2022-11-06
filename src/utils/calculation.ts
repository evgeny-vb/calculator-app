export type CalculatorOperations = {
  [key:string]: (previousOperand: number, currentOperand :number) => number,
}

export const calculatorOperations: CalculatorOperations = {
  "/": (previousOperand: number, currentOperand: number) => previousOperand / currentOperand,
  "*": (previousOperand: number, currentOperand: number) => previousOperand * currentOperand,
  "-": (previousOperand: number, currentOperand: number) => previousOperand - currentOperand,
  "+": (previousOperand: number, currentOperand: number) => previousOperand + currentOperand,
};

export const calculateResult = (previousOperand: number, currentOperand: number, operator: string): number => {
  if ((!previousOperand && !currentOperand) || currentOperand === 0)
    return 0;

  if (operator && previousOperand && !currentOperand)
    return previousOperand;

  if (!operator && (previousOperand || currentOperand))
    return previousOperand || currentOperand;

  if (previousOperand && currentOperand && operator)
    return calculatorOperations[operator](previousOperand, currentOperand);

  return 0;
};

export const percentage = (partialValue: number, totalValue: number): number => {
  totalValue ||= 1;
  return (totalValue / 100) * partialValue;
};
