import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './Chip';

const meta = {
  title: 'Example/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'large',
    status: 'success',
    children: 'Chip',
  },
};
