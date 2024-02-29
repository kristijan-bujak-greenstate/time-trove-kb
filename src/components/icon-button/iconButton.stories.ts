import type { Meta, StoryObj } from '@storybook/react';

import { DeleteIcon } from '../../icons/DeleteIcon';
import { EditIcon } from '../../icons/EditIcon';
import { LogoutIcon } from '../../icons/LogoutIcon';

import { IconButton } from './IconButton';

const meta = {
  title: 'Example/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    icon: LogoutIcon,
    iconShape: 'circle',
    palette: 'error',
  },
};

export const DeleteSquareIconButton: Story = {
  args: {
    icon: DeleteIcon,
    iconShape: 'square',
    palette: 'error',
  },
};

export const EditSquareIconButton: Story = {
  args: {
    icon: EditIcon,
    iconShape: 'square',
    palette: 'neutrals',
  },
};

export const LogoutCircleIconButton: Story = {
  args: {
    icon: LogoutIcon,
    iconShape: 'circle',
    palette: 'error',
  },
};
