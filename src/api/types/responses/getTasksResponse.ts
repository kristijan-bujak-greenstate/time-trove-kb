import { PriorityLevel } from '../../../shared/enums/priorityLevel';

export type Item = {
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
  totalItems: number;
  totalPages: number;
  page: number;
};
