import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '../components/heading/Heading';

const meta = {
  title: 'Example/Heading',
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUp: Story = {
  args: {
    fontFamily: 'inter',
    fontSize: 'lg',
    children: 'Sign Up',
    lineHeight: 'lg',
    fontWeight: 'extraBold',
  },
};
