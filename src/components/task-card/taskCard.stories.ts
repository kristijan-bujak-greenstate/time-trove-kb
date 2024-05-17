import type { Meta, StoryObj } from '@storybook/react';

import { PriorityLevel } from '../../shared/enums/priorityLevel';

import { TaskCard } from './TaskCard';

const meta = {
  title: 'Example/Task Card',
  component: TaskCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: 'Write Blog Post',
    chipText: 'Done',
    isDone: false,
    description: 'Compose a 1000-word blog post on the benefits of mindfulness meditation for mental health.',
    priorityTitle: 'Priority',
    priority: PriorityLevel.HIGH,
    priorityText: 'High',
    onEditClick: () => console.log('Edit icon button clicked'),
    onDeleteClick: () => console.log('Delete icon button clicked'),
  },
};
