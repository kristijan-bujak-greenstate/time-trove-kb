import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { taskSchema } from '../../shared/schema/taskSchema';
import { TaskData } from '../../shared/schema/taskSchema';
import { taskFieldNames } from '../../shared/schema/taskSchema';

import { TextArea } from './TextArea';
import { TextAreaProps } from './TextArea';

const meta = {
  title: 'Example/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

const StatefulTextArea = (props: TextAreaProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<TaskData>({
    mode: 'onChange',
    resolver: zodResolver(taskSchema),
  });

  return (
    <TextArea
      {...props}
      {...register(taskFieldNames.description)}
      error={errors[taskFieldNames.description]?.message}
    />
  );
};

export const Base: Story = {
  args: {
    label: 'Description',
    disabled: false,
    placeholder: 'Description',
    borderRadius: 'small',
  },
  render: ({ ...args }) => <StatefulTextArea {...args} />,
};
