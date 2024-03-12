import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  title: 'Example/Logo',
  component: Logo,
  tags: ['Logo'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoSmall: Story = {
  args: {
    size: 'small',
  },
};

export const LogoLarge: Story = {
  args: {
    size: 'large',
  },
};
