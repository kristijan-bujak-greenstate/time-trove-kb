import { PriorityLevel } from '../../../components/task-card/enum';

export type PostTaskResponse = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: PriorityLevel;
};
