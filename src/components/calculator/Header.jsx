import React from "react";

const Header = (props) => {
  const {previousOperand, operator, currentOperand, result, resultHighlight} = props.calculationState;

  const formatNumber = (value) => {
    if (value === "")
      return value;

    let formattedValue = parseFloat(value).toLocaleString("ru", {
      useGrouping: true,
      maximumFractionDigits: 6
    });

    // Add back missing . in e.g. 4.
    if (value.slice(-1) === ".")
      formattedValue += "."

    return formattedValue;
  };

  const displayFormula = [formatNumber(previousOperand), operator, formatNumber(currentOperand)].join(" ");

  const formulaClass = `calculator-formula ${!resultHighlight ? "highlight" : ""}`;
  const resultClass = `calculator-result ${resultHighlight ? "highlight" : ""}`;

  return (
    <header className="calculator-header">
      <div className={formulaClass}>{displayFormula}</div>
      <div className={resultClass}>= {isNaN(result) ? "Error" : formatNumber(result)}</div>
    </header>
  );
};

export default Header;