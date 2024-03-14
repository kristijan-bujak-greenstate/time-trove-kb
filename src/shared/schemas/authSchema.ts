import { z } from 'zod';

import { FormNames } from '../types/formNames';
export const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(5, { message: 'Password should be at least 5 characters long' }),
});

export type AuthData = z.infer<typeof authSchema>;

export const authFieldNames: FormNames<AuthData> = {
  email: 'email',
  password: 'password',
};
