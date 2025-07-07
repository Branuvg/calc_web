import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders screen and button grid', () => {
    render(<Calculator />);
    expect(screen.getByText('C')).toBeInTheDocument(); // From ButtonGrid
  });
});
