import { render, screen } from '@testing-library/react';

import NewTransactionModal from '.';

describe('<NewTransactionModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewTransactionModal />);

    expect(
      screen.getByRole('heading', { name: /NewTransactionModal/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
