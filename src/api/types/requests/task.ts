import { PriorityLevel } from '../../../shared/enums/priorityLevel';

export type TaskRequest = {
  title: string;
  description: string;
  priority: PriorityLevel;
};
