import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    color: 'hue100',
    children: 'Create an account for your TimeTrove Dashboard.',
  },
};
