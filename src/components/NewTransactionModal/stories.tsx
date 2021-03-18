import { Story, Meta } from '@storybook/react/types-6-0';
import NewTransactionModal from '.';

export default {
  title: 'NewTransactionModal',
  component: NewTransactionModal
} as Meta;

export const Default: Story = () => <NewTransactionModal />;
