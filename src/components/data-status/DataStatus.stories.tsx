import type { Meta, StoryObj } from '@storybook/react';

import { NothingHereYetIcon, Error404Icon, SomethingWentWrongIcon } from '../../icons';

import { DataStatus } from './DataStatus';

const meta = {
  title: 'Example/Data Status',
  component: DataStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DataStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error404: Story = {
  args: {
    title: 'Page not found',
    description:
      'We apologize for the inconvenience, but it appears that the page you are attempting to access is currently unavailable. This might be due to a temporary technical issue or an outdated link.',
    icon: Error404Icon,
    onClick: () => console.log('Button clicked!'),
    buttonText: 'Back home',
  },
};

export const SomethingWentWrong: Story = {
  args: {
    title: 'Something went wrong',
    description: 'An error occurred while attempting to retrieve data from the server.',
    icon: SomethingWentWrongIcon,
    onClick: () => console.log('Button clicked!'),
    buttonText: 'Try again',
    buttonPalette: 'neutrals',
  },
};

export const NothingHereYet: Story = {
  args: {
    title: 'Nothing here yet!',
    description: 'There are no tasks created',
    icon: NothingHereYetIcon,
    onClick: () => console.log('Button clicked!'),
    buttonText: 'Create task',
  },
};
