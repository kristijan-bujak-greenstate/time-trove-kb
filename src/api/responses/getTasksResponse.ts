import { PriorityLevel } from './../../components/task-card/enum';

type Item = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: PriorityLevel;
};

export type TasksResponse = {
  items: Item[];
  count: number;
};
