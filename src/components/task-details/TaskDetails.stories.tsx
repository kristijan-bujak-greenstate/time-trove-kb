import type { Meta, StoryObj } from '@storybook/react';

import { FileIcon } from '../../icons/FileIcon';
import { ChipStatus } from '../../shared/enums/chipStatus';

import { TaskDetails } from './TaskDetails';

const meta = {
  title: 'Example/Task Details',
  component: TaskDetails,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TaskDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    headerIcon: FileIcon,
    headerTitle: 'Task details',
    taskDescription:
      'Lorem ipsum dolor sit amet consectetur. Nisi adipiscing dictumst elit ac non ultricies. Faucibus blandit commodo vitae faucibus habitant egestas. Sed quam lectus euismod eget tellus. Eget sodales sollicitudin rutrum molestie. Pharetra nibh amet pulvinar vel sapien vitae. Ipsum sed lorem tincidunt lacus bibendum curabitur sit tellus morbi. Nam ac facilisi pretium ullamcorper. Et fermentum etiam aliquam id pellentesque.',
    taskTitle: 'Write Blog Post',
    buttonText: 'Mark as done',
    isButtonLoading: false,
    chipText: 'In progress',
    chipStatus: ChipStatus.WARNING,
  },
};
