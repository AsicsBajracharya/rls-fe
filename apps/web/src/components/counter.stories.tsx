import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './counter';
import { Provider } from 'react-redux';
import { store } from '@/lib/store';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithInitialState: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'This story shows the counter component with Redux state management.',
      },
    },
  },
}; 