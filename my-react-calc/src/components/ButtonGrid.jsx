import Button from "./Button";
import React from 'react';

export default function ButtonGrid({
  onNumber,
  onOperator,
  onClear,
  onPlusMinus,
  onDelete,
  onCompute,
}) {
  return (
    <div className="botonWrapper">
      <Button className="simbolos" onClick={onClear}>C</Button>
      <Button className="simbolos" onClick={onDelete}>⌫</Button>
      <Button className="simbolos" onClick={onPlusMinus}>+/-</Button>
      <Button className="simbolos" onClick={() => onOperator("÷")}>÷</Button>
      {["7", "8", "9"].map((n) => <Button key={n} onClick={() => onNumber(n)}>{n}</Button>)}
      <Button className="simbolos" onClick={() => onOperator("x")}>x</Button>
      {["4", "5", "6"].map((n) => <Button key={n} onClick={() => onNumber(n)}>{n}</Button>)}
      <Button className="simbolos" onClick={() => onOperator("-")}>-</Button>
      {["1", "2", "3"].map((n) => <Button key={n} onClick={() => onNumber(n)}>{n}</Button>)}
      <Button className="simbolos" onClick={() => onOperator("+")}>+</Button>
      <Button className="cero" onClick={() => onNumber("0")}>0</Button>
      <Button onClick={() => onNumber(".")}>.</Button>
      <Button className="simbolos" onClick={onCompute}>=</Button>
    </div>
  );
}
