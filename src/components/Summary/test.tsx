import { render, screen } from '@testing-library/react';

import Summary from '.';

describe('<Summary />', () => {
  it('should render the heading', () => {
    const { container } = render(<Summary />);

    expect(
      screen.getByRole('heading', { name: /Summary/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
