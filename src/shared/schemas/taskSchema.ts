import { z } from 'zod';

import { ChipStatus } from '../enums/chipStatus';
import { FormNames } from '../types/formNames';

export const taskSchema = (t: (key: string) => string) =>
  z.object({
    title: z.string().min(3, { message: t('taskTitleErrorMessage') }),
    description: z.string().min(10, { message: t('taskDescriptionErrorMessage') }),
    selectedOption: z.object({
      value: z.string(),
      id: z.string(),
      status: z.nativeEnum(ChipStatus),
    }),
  });

export type TaskData = z.infer<ReturnType<typeof taskSchema>>;

export const taskFieldNames: FormNames<TaskData> = {
  title: 'title',
  description: 'description',
  selectedOption: 'selectedOption',
};
