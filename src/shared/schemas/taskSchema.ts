import { z } from 'zod';

import { TranslationKey } from '../../hooks/useTranslation';
import { ChipStatus } from '../enums/chipStatus';
import { PriorityLevel } from '../enums/priorityLevel';
import { FormNames } from '../types/formNames';

export const taskSchema = (t: (key: TranslationKey) => string) =>
  z.object({
    title: z.string().min(3, { message: t('taskForm.validation.title') }),
    description: z.string().min(10, { message: t('taskForm.validation.description') }),
    selectedOption: z.object({
      value: z.nativeEnum(PriorityLevel),
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
