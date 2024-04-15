import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { EditIcon } from '../../icons/EditIcon';
import { ChipStatus } from '../../shared/enums/chipStatus';
import { TaskData, taskFieldNames, taskSchema } from '../../shared/schemas/taskSchema';
import { OptionSelectPriority } from '../option-select-list/OptionSelectList';

import { TaskForm } from './TaskForm';
import { TaskFormProps } from './types';

const meta = {
  title: 'Example/Task Form',
  component: TaskForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TaskForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockedSelectOptionsItems: OptionSelectPriority[] = [
  {
    id: '1',
    status: ChipStatus.SUCCESS,
    value: 'Low',
  },
  {
    id: '2',
    status: ChipStatus.WARNING,
    value: 'Medium',
  },
  {
    id: '3',
    status: ChipStatus.ERROR,
    value: 'High',
  },
];

const StatefulTaskForm = ({ inputProps, textAreaProps, ...props }: TaskFormProps) => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isValid, errors },
    getValues,
  } = useForm<TaskData>({
    mode: 'onChange',
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskData) => {
    alert(
      'Email: ' + data.title + ', Password: ' + data.description + ', Selected option: ' + data.selectedOption?.value
    );
  };

  const handleOptionSelectClick = (option: OptionSelectPriority) => {
    setValue(taskFieldNames.selectedOption, option, { shouldValidate: true });
  };

  return (
    <TaskForm
      {...props}
      inputProps={{
        ...inputProps,
        error: errors[taskFieldNames.title]?.message,
        ...register(taskFieldNames.title),
      }}
      textAreaProps={{
        ...textAreaProps,
        error: errors[taskFieldNames.description]?.message,
        ...register(taskFieldNames.description),
      }}
      onSubmitForm={handleSubmit(onSubmit)}
      handleOptionSelectClick={handleOptionSelectClick}
      selectedOption={getValues(taskFieldNames.selectedOption)}
      isButtonDisabled={!isValid}
    />
  );
};

export const EditTask: Story = {
  args: {
    headerIcon: EditIcon,
    headerTitle: 'Edit task',
    formTitle: 'Task details',
    buttonText: 'Edit task',
    selectOptionList: mockedSelectOptionsItems,
    inputProps: {
      label: 'Task title',
      type: 'text',
      placeholder: 'title',
    },
    textAreaProps: {
      label: 'Description',
      placeholder: 'description',
    },
    isDisabledOptionSelectList: false,
    isButtonDisabled: false,
    optionSelectTitle: 'Priority',
    hasErrorOptionSelectList: false,
    isLoadingButton: false,
  },
  render: (args) => <StatefulTaskForm {...args} />,
};

export const CreateTask: Story = {
  args: {
    ...EditTask.args,
    headerTitle: 'Create task',
    description: 'Please provide the required details to create the task.',
    buttonText: 'Create task',
  },
  render: (args) => <StatefulTaskForm {...args} />,
};
