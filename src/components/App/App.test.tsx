import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chess board with turn display', () => {
  render(<App />);
  const turnDisplay = screen.getByText(/WHITE/i);
  expect(turnDisplay).toBeInTheDocument();
});
