import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    fill: true,
    disabled: false,
    size: 'large',
    palette: 'primary',
    isLoading: false,
    children: 'Button',
  },
};

export const Loading: Story = {
  args: {
    fill: true,
    disabled: false,
    size: 'large',
    palette: 'primary',
    isLoading: true,
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    fill: false,
    disabled: true,
    size: 'small',
    palette: 'primary',
    isLoading: false,
    children: 'Button',
  },
};
