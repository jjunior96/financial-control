import { Story, Meta } from '@storybook/react/types-6-0';
import TransactionsTable from '.';

export default {
  title: 'TransactionsTable',
  component: TransactionsTable
} as Meta;

export const Default: Story = () => <TransactionsTable />;
