import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm, FormProvider, DefaultValues } from 'react-hook-form';
import { ZodSchema } from 'zod';

type ControlledFormProps<T> = {
  schema: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  children: ReactNode;
};

export const ControlledForm = <T extends Record<string, unknown>>({
  schema,
  defaultValues,
  children,
}: ControlledFormProps<T>): JSX.Element => {
  const formMethods = useForm<T>({
    mode: 'onChange',
    resolver: zodResolver(schema),
    defaultValues,
  });

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};
