import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    palette: 'neutrals',
    backgroundColor: 'hue0',
    borderRadius: 'medium',
    borderColor: 'hue100',
    padding: '1rem',
    borderWidth: '1px',
    children: (
      <div>
        Lorem ipsum dolor sit amet. Eum provident debitis aut soluta dolores et nisi sunt? Aut nihil architecto a rerum
        odit est eveniet repellendus id quaerat aspernatur. Et blanditiis voluptas et quaerat quia a sint dolore qui
        voluptas consequuntur. Nam ducimus suscipit 33 corporis fugiat qui consequuntur recusandae quo fuga dolores qui
        libero provident et fugiat ullam. Et exercitationem quod sed ipsam expedita vel recusandae atque qui deleniti
        nihil. Et nihil itaque est autem fuga aut soluta soluta non atque quisquam id facere voluptates.
      </div>
    ),
  },
};
