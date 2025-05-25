import { renderHook, act } from '@testing-library/react';
import { useCalculator } from '../hooks/useCalculator';

describe('useCalculator Hook', () => {
  test('handles number input correctly', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => result.current.handleNumber('5'));
    expect(result.current.calc.secondOperand).toBe('5');
    
    act(() => result.current.handleNumber('.'));
    expect(result.current.calc.secondOperand).toBe('5.');
  });

  test('performs basic operations', () => {
    const { result } = renderHook(() => useCalculator());
    
    // 5 + 3 = 8
    act(() => result.current.handleNumber('5'));
    act(() => result.current.handleOperator('+'));
    act(() => result.current.handleNumber('3'));
    act(() => result.current.handleCompute());
    
    expect(result.current.calc.secondOperand).toBe('8');
  });

  test('handles division by zero', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => result.current.handleNumber('5'));
    act(() => result.current.handleOperator('÷'));
    act(() => result.current.handleNumber('0'));
    act(() => result.current.handleCompute());
    
    expect(result.current.calc.secondOperand).toBe('NOT ALLOW');
  });

  test('formats numbers correctly', () => {
    const { result } = renderHook(() => useCalculator());
    
    act(() => result.current.handleNumber('123456789'));
    expect(result.current.format(result.current.calc.secondOperand)).toBe('123,456,789');
  });
});