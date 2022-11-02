import React from "react";

const Body = ({calculationState, setLightTheme, calculationActions}) => {
  const {previousOperand, currentOperand} = calculationState;

  const switchTheme = () => {
    setLightTheme(prevState => !prevState);
  };

  const inputValue = (val) => {
    calculationActions.inputValue(val);
  };

  const inputOperator = (val) => {
    calculationActions.inputOperator(val);
  };

  const inputDot = () => {
    calculationActions.inputDot();
  };

  const inputPercent = () => {
    calculationActions.inputPercent();
  };

  const inputEqual = () => {
    calculationActions.resultHighlight();
  };

  const backspace = () => {
    calculationActions.backspace();
  };

  const clear = () => {
    calculationActions.clear();
  };

  return (
    <div className="calculator-body">
      <button className="btn btn-symbol" onClick={clear}>{!previousOperand && !currentOperand ? "AC" : "C"}</button>
      {/* theme button */}
      <button className="btn btn-symbol" onClick={switchTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon icon-day"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon icon-night"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </button>
      {/* backspace */}
      <button className="btn btn-symbol" onClick={backspace}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
          />
        </svg>
      </button>
      {/* divide */}
      <button className="btn btn-symbol" onClick={() => inputOperator("/")}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" fill="none" strokeLinecap="round"
             strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle fill="currentColor" cx="12" cy="6" r="1"/>
          <circle fill="currentColor" cx="12" cy="18" r="1"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </button>


      <button className="btn" onClick={() => inputValue(7)}>7</button>
      <button className="btn" onClick={() => inputValue(8)}>8</button>
      <button className="btn" onClick={() => inputValue(9)}>9</button>
      <button className="btn btn-symbol" onClick={() => inputOperator("*")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>


      <button className="btn" onClick={() => inputValue(4)}>4</button>
      <button className="btn" onClick={() => inputValue(5)}>5</button>
      <button className="btn" onClick={() => inputValue(6)}>6</button>
      <button className="btn btn-symbol" onClick={() => inputOperator("-")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15"
          />
        </svg>
      </button>


      <button className="btn" onClick={() => inputValue(1)}>1</button>
      <button className="btn" onClick={() => inputValue(2)}>2</button>
      <button className="btn" onClick={() => inputValue(3)}>3</button>
      <button className="btn btn-symbol" onClick={() => inputOperator("+")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>


      {/* Percentage button */}
      <button className="btn btn-symbol" onClick={inputPercent}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
             className="icon">
          <line x1="19" y1="5" x2="5" y2="19"/>
          <circle cx="6.5" cy="6.5" r="2.5"/>
          <circle cx="17.5" cy="17.5" r="2.5"/>
        </svg>
      </button>

      <button className="btn btn-symbol" onClick={() => inputValue(0)}>0</button>

      {/* Dot button */}
      <button className="btn btn-symbol" onClick={inputDot}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="icon"
          viewBox="0 0 16 16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path>
        </svg>
      </button>

      {/* Equal button */}
      <button className="btn btn-equal" onClick={inputEqual}>
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <path
            d="M5.00006 8.625C5.00006 8.45924 5.06591 8.30027 5.18312 8.18306C5.30033 8.06585 5.4593 8 5.62506 8H14.3751C14.5408 8 14.6998 8.06585 14.817 8.18306C14.9342 8.30027 15.0001 8.45924 15.0001 8.625C15.0001 8.79076 14.9342 8.94973 14.817 9.06694C14.6998 9.18415 14.5408 9.25 14.3751 9.25H5.62506C5.4593 9.25 5.30033 9.18415 5.18312 9.06694C5.06591 8.94973 5.00006 8.79076 5.00006 8.625Z"
            fill="currentColor"
          ></path>
          <path
            d="M5.00006 12.25C5.00006 12.0842 5.06591 11.9253 5.18312 11.8081C5.30033 11.6908 5.4593 11.625 5.62506 11.625H14.3751C14.5408 11.625 14.6998 11.6908 14.817 11.8081C14.9342 11.9253 15.0001 12.0842 15.0001 12.25C15.0001 12.4158 14.9342 12.5747 14.817 12.6919C14.6998 12.8092 14.5408 12.875 14.3751 12.875H5.62506C5.4593 12.875 5.30033 12.8092 5.18312 12.6919C5.06591 12.5747 5.00006 12.4158 5.00006 12.25Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Body;