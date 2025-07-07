import { render, fireEvent, screen } from '@testing-library/react';
import ButtonGrid from '../components/ButtonGrid';

describe('ButtonGrid', () => {
  const handlers = {
    onNumber: vi.fn(),
    onOperator: vi.fn(),
    onClear: vi.fn(),
    onPlusMinus: vi.fn(),
    onDelete: vi.fn(),
    onCompute: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('calls onClear when "C" is clicked', () => {
    render(<ButtonGrid {...handlers} />);
    fireEvent.click(screen.getByText('C'));
    expect(handlers.onClear).toHaveBeenCalled();
  });

  it('calls onDelete when "⌫" is clicked', () => {
    render(<ButtonGrid {...handlers} />);
    fireEvent.click(screen.getByText('⌫'));
    expect(handlers.onDelete).toHaveBeenCalled();
  });

  it('calls onOperator when "+" is clicked', () => {
    render(<ButtonGrid {...handlers} />);
    fireEvent.click(screen.getByText('+'));
    expect(handlers.onOperator).toHaveBeenCalledWith('+');
  });

  it('calls onNumber when "7" is clicked', () => {
    render(<ButtonGrid {...handlers} />);
    fireEvent.click(screen.getByText('7'));
    expect(handlers.onNumber).toHaveBeenCalledWith('7');
  });

  it('calls onCompute when "=" is clicked', () => {
    render(<ButtonGrid {...handlers} />);
    fireEvent.click(screen.getByText('='));
    expect(handlers.onCompute).toHaveBeenCalled();
  });
});
