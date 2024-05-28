import { z } from 'zod';

import { TranslationKey } from '../../hooks/useTranslation';
import { FormNames } from '../types/formNames';

export const authSchema = (t: (key: TranslationKey) => string | undefined) =>
  z.object({
    email: z.string().email({ message: t('publicForm.base.validation.email') }),
    password: z.string().min(5, { message: t('publicForm.base.validation.password') }),
  });

export type AuthData = z.infer<ReturnType<typeof authSchema>>;

export const authFieldNames: FormNames<AuthData> = {
  email: 'email',
  password: 'password',
};
