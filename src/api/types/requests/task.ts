import { PriorityLevel } from '../../../components/task-card/enum';

export type Task = {
  title: string;
  description: string;
  priority: PriorityLevel;
};
