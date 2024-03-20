import { z } from 'zod';

import { ChipStatus } from '../enums/chipStatus';
import { FormNames } from '../types/formNames';

export const taskSchema = z.object({
  title: z.string().min(3, { message: 'Title should be at least 3 characters long' }),
  description: z.string().min(10, { message: 'Description should be at least 10 characters long' }),
  selectedOption: z.object({
    value: z.string(),
    id: z.string(),
    status: z.nativeEnum(ChipStatus),
  }),
});

export type TaskData = z.infer<typeof taskSchema>;

export const taskFieldNames: FormNames<TaskData> = {
  title: 'title',
  description: 'description',
  selectedOption: 'selectedOption',
};
