import { render, screen } from '@testing-library/react';
import Home from 'pages';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(screen.getByText(/Template NextJS./i)).toBeInTheDocument();
  });
});
