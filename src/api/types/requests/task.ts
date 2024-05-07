import { PriorityLevel } from '../../../components/task-card/enum';

export type TaskRequest = {
  title: string;
  description: string;
  priority: PriorityLevel;
};
