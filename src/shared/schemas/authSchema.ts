import { z } from 'zod';

import { FormNames } from '../types/formNames';

export const authSchema = (t: (key: string) => string | undefined) =>
  z.object({
    email: z.string().email({ message: t('emailValidationMessage') }),
    password: z.string().min(5, { message: t('passwordValidationMessage') }),
  });

export type AuthData = z.infer<ReturnType<typeof authSchema>>;

export const authFieldNames: FormNames<AuthData> = {
  email: 'email',
  password: 'password',
};
