export default function Screen({ calc, format }) {
  return (
    <div className="screen">
      <span className="operation">
        {calc.firstOperand !== null && `${format(calc.firstOperand)} ${calc.operator}`}
      </span>
      <span className="main_input">{format(calc.secondOperand)}</span>
    </div>
  );
}
