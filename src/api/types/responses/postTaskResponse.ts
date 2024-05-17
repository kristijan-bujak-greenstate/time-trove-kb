import { PriorityLevel } from '../../../shared/enums/priorityLevel';

export type TaskResponse = {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
  priority: PriorityLevel;
};
