import type { Meta, StoryObj } from '@storybook/react';

import { LogoutIcon } from '../../icons/LogoutIcon';

import { Navigation } from './Navigation';

const meta = {
  title: 'Example/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Dashboard',
    buttonText: 'Create task',
    icon: LogoutIcon,
    onButtonClick: () => console.log('Button clicked!'),
    onIconButtonClick: () => console.log('Icon button clicked!'),
    handleOnChangeInput: () => console.log('change input'),
    inputPlaceholder: 'Search tasks',
    inputValue: 'Some input value',
  },
};
