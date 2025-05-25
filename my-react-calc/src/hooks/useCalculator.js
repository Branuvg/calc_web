import { useState } from "react";

export function useCalculator() {
  const [calc, setCalc] = useState({
    firstOperand: null,
    secondOperand: null,
    operator: "=",
  });

  const handleNumber = (number) => {
    if (calc.secondOperand !== null && calc.secondOperand.length === 9) return;
    if (calc.secondOperand === "0" && number === "0") return;
    if (calc.secondOperand?.includes(".") && number === ".") return;
    let l_calc = {};
    if (calc.secondOperand === null && number === ".") {
      l_calc = { ...calc, secondOperand: "0." };
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
        operator,
        firstOperand: calc.secondOperand,
        secondOperand: null,
      });
    } else if (calc.secondOperand === null) {
      setCalc({
        ...calc,
        operator,
      });
    } else {
      setCalc({
        ...calc,
        firstOperand: compute(),
        operator,
        secondOperand: null,
      });
    }
  };

  const handleClear = () => {
    setCalc({
      firstOperand: null,
      secondOperand: null,
      operator: "=",
    });
  };

  const handlePlusMinus = () => {
    if (calc.secondOperand !== null) {
      const secondOperand = -1 * parseFloat(calc.secondOperand);
      setCalc({ ...calc, secondOperand: secondOperand.toString() });
    }
  };

  const handleDelete = () => {
    if (calc.secondOperand === null) return;
    let secondOperand = calc.secondOperand;
    secondOperand =
      secondOperand.length === 1 ? null : secondOperand.slice(0, -1);
    setCalc({ ...calc, secondOperand });
  };

  const compute = () => {
    const { firstOperand, secondOperand, operator } = calc;
    if (firstOperand !== null && secondOperand !== null && operator !== null) {
      const a = parseFloat(firstOperand);
      const b = parseFloat(secondOperand);
      if (isNaN(a) || isNaN(b)) return "";
      let result;
      switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "x": result = a * b; break;
        case "÷": result = b !== 0 ? a / b : "NOT ALLOW"; break;
        default: return "";
      }
      if (typeof result === "number" && result > 999999999) return "ERROR";
      if (result !== "NOT ALLOW" && result.toString().length > 2) result = result.toFixed(2);
      return result.toString();
    }
  };

  const handleCompute = () => {
    setCalc({ ...calc, secondOperand: compute(), firstOperand: null });
  };

  const format = (value) => {
    if (value === null) return "";
    if (value === "ERROR" || value === "NOT ALLOW") return value;
    const [intPart, decimalPart] = value.split(".");
    const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return decimalPart ? `${withCommas}.${decimalPart}` : withCommas;
  };

  return {
    calc,
    handleNumber,
    handleOperator,
    handleClear,
    handlePlusMinus,
    handleDelete,
    handleCompute,
    format,
  };
}
