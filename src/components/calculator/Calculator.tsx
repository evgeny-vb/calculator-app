import {useState} from "react";
import "./Calculator.css";
import Header from "./Header";
import Body from "./Body";

const Calculator = () => {
  const [lightTheme, setLightTheme] = useState(false);

  const switchThemeHandler = () => {
    setLightTheme(prevState => !prevState);
  };

  const calculatorClass = `calculator ${lightTheme ? "light" : ""}`;

  return (
    <main className="calculator-wrapper">
      <section className={calculatorClass}>
        <Header/>
        <Body switchThemeHandler={switchThemeHandler}/>
      </section>
    </main>
  );
};

export default Calculator;