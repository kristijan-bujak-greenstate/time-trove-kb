import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TaskData } from '../../shared/schemas/taskSchema';
import { taskFieldNames } from '../../shared/schemas/taskSchema';
import { taskSchema } from '../../shared/schemas/taskSchema';

import { Input } from './Input';
import { InputProps } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulInput = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<TaskData>({
    mode: 'onChange',
    resolver: zodResolver(taskSchema),
  });

  return <Input {...props} {...register(taskFieldNames.title)} error={errors[taskFieldNames.title]?.message} />;
};

export const Base: Story = {
  args: {
    label: 'Task title',
    type: 'text',
    disabled: false,
    placeholder: 'Task title',
    borderRadius: 'small',
  },
  render: ({ ...args }) => <StatefulInput {...args} />,
};
