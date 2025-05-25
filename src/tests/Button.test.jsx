import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renders the children', () => {
    render(<Button>5</Button>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('applies className prop', () => {
    render(<Button className="test-class">5</Button>);
    expect(screen.getByText('5')).toHaveClass('test-class');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>5</Button>);
    fireEvent.click(screen.getByText('5'));
    expect(handleClick).toHaveBeenCalled();
  });
});
