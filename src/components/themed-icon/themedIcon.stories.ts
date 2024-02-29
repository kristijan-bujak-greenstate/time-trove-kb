import type { Meta, StoryObj } from '@storybook/react';

import { AlertIcon } from '../../icons/AlertIcon';
import { DeleteIcon } from '../../icons/DeleteIcon';
import { EditIcon } from '../../icons/EditIcon';
import { FileIcon } from '../../icons/FileIcon';
import { LoadingIcon } from '../../icons/LoadingIcon';
import { LogoutIcon } from '../../icons/LogoutIcon';
import { RemoveIcon } from '../../icons/RemoveIcon';
import { SuccessCheckIcon } from '../../icons/SuccessCheckIcon';
import { ValidateIcon } from '../../icons/ValidateIcon';
import { Xicon } from '../../icons/XIcon';

import { ThemedIcon } from './ThemedIcon';

const meta = {
  title: 'Example/Themed Icon',
  component: ThemedIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ThemedIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: LogoutIcon,
    color: 'hue100',
  },
};

export const ValidateIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: ValidateIcon,
    color: 'hue100',
  },
};

export const DeleteIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: DeleteIcon,
    color: 'hue100',
  },
};

export const EditIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: EditIcon,
    color: 'hue100',
  },
};

export const SuccessCheckIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: SuccessCheckIcon,
    color: 'hue100',
  },
};

export const XiconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: Xicon,
    color: 'hue100',
  },
};

export const FileIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: FileIcon,
    color: 'hue100',
  },
};

export const AlertIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: AlertIcon,
    color: 'hue100',
  },
};

export const RemoveIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: RemoveIcon,
    color: 'hue100',
  },
};

export const LoadingIconStory: Story = {
  args: {
    palette: 'neutrals',
    size: 'medium',
    icon: LoadingIcon,
    color: 'hue100',
  },
};
