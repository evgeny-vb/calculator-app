import React from "react";
import {observer} from "mobx-react-lite";
import calculatorStore from "../../store/calculatorStore";

const Header = observer(() => {
  const {previousOperand, operator, currentOperand, result, resultHighlight} = calculatorStore;

  const formatNumber = (number: string) => {
    if (number === "")
      return number;

    const fractionLength = 6;

    let formattedValue = parseFloat(number).toLocaleString("ru", {
      useGrouping: true,
      maximumFractionDigits: fractionLength
    });

    // Add back missing .0 in e.g. 4.0
    const match = number.match(/\.\d*?(0*)$/)

    if (match)
      formattedValue += (/[1-9]/).test(match[0]) ? match[1] : match[0].slice(0, fractionLength+1)

    return formattedValue;
  };

  const displayFormula = [formatNumber(previousOperand), operator, formatNumber(currentOperand)].join(" ");

  const formulaClass = `calculator-formula ${!resultHighlight ? "highlight" : ""}`;
  const resultClass = `calculator-result ${resultHighlight ? "highlight" : ""}`;

  return (
    <header className="calculator-header">
      <div className={formulaClass}>{displayFormula}</div>
      <div className={resultClass}>= {formatNumber(result)}</div>
    </header>
  );
});

export default Header;