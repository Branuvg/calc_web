import { useCalculator } from "../hooks/useCalculator";
import Screen from "./Screen";
import ButtonGrid from "./ButtonGrid";
import "../App.css";
export default function Calculator() {
  const {
    calc, handleNumber, handleOperator, handleClear, handlePlusMinus, handleDelete, handleCompute,format,
  } = useCalculator();
  
  return (
    <div className="container">
      <div className="calculator">
        <Screen calc={calc} format={format} />
        <ButtonGrid
          onNumber={handleNumber}onOperator={handleOperator}onClear={handleClear}onPlusMinus={handlePlusMinus} onDelete={handleDelete} onCompute={handleCompute}
        />
      </div>
    </div>
  );
}