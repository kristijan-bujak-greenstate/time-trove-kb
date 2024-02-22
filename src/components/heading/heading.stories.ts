import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: 'Sign Up',
  },
};
