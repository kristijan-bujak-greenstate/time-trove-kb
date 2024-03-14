import { z } from 'zod';

import { FormNames } from '../types/formNames';
export const taskSchema = z.object({
  title: z.string().min(3, { message: 'Title should be at least 3 characters long' }),
  description: z.string().min(10, { message: 'Description should be at least 10 characters long' }),
});

export type TaskData = z.infer<typeof taskSchema>;

export const taskFieldNames: FormNames<TaskData> = {
  title: 'title',
  description: 'description',
};
