import type { Meta, StoryObj } from '@storybook/react';

import { TaskCard } from '..';
import { Item } from '../../api/types/responses/getTasksResponse';
import { useTranslation } from '../../hooks/useTranslation';
import { PriorityLevel } from '../../shared/enums/priorityLevel';

import { FlatList, FlatListProps } from '.';

const meta = {
  title: 'Example/Flat List',
  component: FlatList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<FlatListProps<Item>>;

export default meta;
type Story = StoryObj<FlatListProps<Item>>;

const mockedTaskList: Item[] = [
  {
    id: '66048be1dcf85cf65fd1e10a',
    title: 'asc',
    description: 'task description',
    done: false,
    createdAt: '2024-03-27T21:13:05.605Z',
    updatedAt: '2024-03-27T21:13:05.605Z',
    priority: 'High' as PriorityLevel,
  },
  {
    id: '66048e74dcf85cf65fd1e13f',
    title: 'asc22222',
    description: 'task description222222',
    done: false,
    createdAt: '2024-03-27T21:24:04.785Z',
    updatedAt: '2024-03-27T21:24:04.785Z',
    priority: 'High' as PriorityLevel,
  },
  {
    id: '661928682c4676e95ddd2871',
    title: 'sadsad',
    description: 'sdadsasdsa',
    done: false,
    createdAt: '2024-04-12T12:26:16.531Z',
    updatedAt: '2024-04-12T12:26:16.531Z',
    priority: 'High' as PriorityLevel,
  },
  {
    id: '6619297a2c4676e95ddd2886',
    title: 'sadsa',
    description: 'sadsadsasd',
    done: false,
    createdAt: '2024-04-12T12:30:50.229Z',
    updatedAt: '2024-04-12T12:30:50.229Z',
    priority: 'High' as PriorityLevel,
  },
  {
    id: '661929912c4676e95ddd288b',
    title: 'sadass',
    description: 'adsadsadsd',
    done: false,
    createdAt: '2024-04-12T12:31:13.925Z',
    updatedAt: '2024-04-12T12:31:13.925Z',
    priority: 'High' as PriorityLevel,
  },
];

const StatefulFlatList = ({ data, numColumns, gap }: FlatListProps<Item>) => {
  const { t } = useTranslation();

  const renderTask = (task: Item) => {
    return (
      <TaskCard
        title={task.title}
        isDone={task.done}
        description={task.description}
        priority={task.priority}
        chipText={t('chip.done')}
        priorityText={task.priority}
        priorityTitle={t('taskCard.label')}
        onEditClick={() => console.log(`Edit task ${task.id}`)}
        onDeleteClick={() => console.log(`Delete task ${task.id}`)}
        onClick={() => console.log('Card clicked')}
      />
    );
  };

  const keyExtractor = (task: Item) => task.id.toString();

  return <FlatList data={data} renderItem={renderTask} numColumns={numColumns} keyExtractor={keyExtractor} gap={gap} />;
};

export const Base: Story = {
  args: {
    data: mockedTaskList,
    numColumns: 2,
    gap: '1rem',
  },
  render: (args) => <StatefulFlatList {...args} />,
};
