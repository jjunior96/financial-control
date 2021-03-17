import { render, screen } from '@testing-library/react';

import TransactionsTable from '.';

describe('<TransactionsTable />', () => {
  it('should render the heading', () => {
    const { container } = render(<TransactionsTable />);

    expect(
      screen.getByRole('heading', { name: /TransactionsTable/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
