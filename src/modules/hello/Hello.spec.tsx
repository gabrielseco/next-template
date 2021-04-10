import { render, screen } from '@testing-library/react';

import { Hello } from './Hello';

describe('HelloModule', () => {
  it('should render hello', () => {
    render(<Hello />);

    expect(screen.getByText(/hello/)).toBeInTheDocument();
  });
});
