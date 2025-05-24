import { useState } from "react";
import "./App.css";

export default function App() {
  const [calc, setCalc] = useState({
    firstOperand: null,
    secondOperand: null,
    operator: "=",
  });

  const handleNumber = (number) => {
    if (calc.secondOperand !== null && calc.secondOperand.length === 9) return; // nueve digitos max
    if (calc.secondOperand === "0" && number === "0") return;
    if (calc.secondOperand?.includes(".") && number === ".") return;
    let l_calc = {};
    if (calc.secondOperand === null && number === ".") {
      l_calc = {
        ...calc,
        secondOperand: "0.",
      };
    } else {
      l_calc = {
        ...calc,
        secondOperand:
          calc.secondOperand !== null ? calc.secondOperand + number : number,
      };
    }
    setCalc(l_calc);
  };

  const handleOperator = (operator) => {
    if (calc.firstOperand === null && calc.secondOperand === null) return;

    if (calc.firstOperand === null) {
      setCalc({
        ...calc,
        operator: operator,
        firstOperand: calc.secondOperand,
        secondOperand: null,
      });
    } else {
      setCalc({
        ...calc,
        operator: operator,
      });
    }

    if (calc.secondOperand === null) {
      setCalc({
        ...calc,
        operator: operator,
      });
    }

    if (calc.firstOperand !== null && calc.secondOperand !== null) {
      setCalc({
        ...calc,
        firstOperand: operar(),
        operator: operator,
        secondOperand: null,
      });
    }
  };

  const handleClear = () => {
    setCalc({
      ...calc,
      firstOperand: null,
      secondOperand: null,
      operator: "=",
    });
  };

  const handlePlusMinus = () => {
    if (calc.secondOperand !== null) {
      const secondOperand = -1 * parseFloat(calc.secondOperand);
      setCalc({
        ...calc,
        secondOperand: secondOperand.toString(),
      });
    }
  };

  const handleDelete = () => {
    if (calc.secondOperand === null) return;
    let secondOperand = calc.secondOperand;
    if (secondOperand?.length === 1) {
      secondOperand = null;
    } else {
      secondOperand = secondOperand.slice(0, secondOperand.length - 1);
    }
    setCalc({
      ...calc,
      secondOperand: secondOperand,
    });
  };

  const handleOperar = () => {
    setCalc({
      ...calc,
      secondOperand: operar(),
      firstOperand: null,
    });
  };

  const format = (value) => {
    if (value === null) return;
    if (value === "ERROR" || value === "NOT ALLOW") return value;

    const [intPart, decimalPart] = value.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
  };

  const operar = () => {
    if (
      calc.firstOperand !== null &&
      calc.secondOperand !== null &&
      calc.operator !== null
    ) {
      let result = "";

      const firstOperand = parseFloat(calc.firstOperand);
      const secondOperand = parseFloat(calc.secondOperand);

      if (isNaN(firstOperand) || isNaN(secondOperand)) {
        return result;
      }

      switch (calc.operator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "x":
          result = firstOperand * secondOperand;
          break;
        case "÷":
          result =
            secondOperand !== 0 ? firstOperand / secondOperand : "NOT ALLOW";
          break;
      }

      if (typeof result === "number" && result > 999999999) {
        return "ERROR";
      }

      if (result !== "NOT ALLOW" && result.toString().length > 2) {
        result = result.toFixed(2);
      }

      return result.toString()
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="screen">
          <span className="operation">
            {calc.firstOperand !== null &&
              `${format(calc.firstOperand)} ${calc.operator}`}
              {format(calc.secondOperand)}
          </span>
        </div>

        <div className="botonWrapper">
          <button onClick={() => handleClear()}>C</button>
          <button onClick={() => handleDelete()}>⌫</button>
          <button onClick={() => handlePlusMinus()}>+/-</button>
          <button onClick={() => handleOperator("÷")}>÷</button>
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
          <button onClick={() => handleOperator("x")}>x</button>
          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleNumber(".")}>.</button>
          <button onClick={() => handleOperar()}>=</button>
        </div>
      </div>
    </div>
  );
}