import type { Meta, StoryObj } from '@storybook/react';

import { RadioButton } from './RadioButton';

const meta = {
  title: 'Example/Radio Button',
  component: RadioButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    disabled: false,
    isSelected: false,
    hasError: false,
  },
};

export const Error: Story = {
  args: {
    ...Base.args,
    hasError: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true,
  },
};

export const Selected: Story = {
  args: {
    ...Base.args,
    isSelected: true,
  },
};
