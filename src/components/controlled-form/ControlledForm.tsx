import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode, useEffect } from 'react';
import { useForm, FormProvider, DefaultValues, Path } from 'react-hook-form';
import { ZodType } from 'zod';

import { useLanguageContext } from '../../context/LanguageContext';
import { useTranslation } from '../../hooks/useTranslation';

type ControlledFormProps<T> = {
  schema: TranslatedSchema<T>;
  defaultValues?: DefaultValues<T>;
  children: ReactNode;
};

type TranslatedSchema<T> = (t: (key: string) => string) => ZodType<T>;
type ErrorFieldsType<T> = Path<T> | Path<T>[];

export const ControlledForm = <T extends Record<string, unknown>>({
  schema,
  defaultValues,
  children,
}: ControlledFormProps<T>): JSX.Element => {
  const { t } = useTranslation();

  const formMethods = useForm<T>({
    mode: 'onChange',
    resolver: zodResolver(schema(t)),
    defaultValues,
  });

  const { currentLanguage } = useLanguageContext();

  useEffect(() => {
    formMethods.trigger(Object.keys(formMethods.formState.errors) as ErrorFieldsType<T>);
  }, [currentLanguage, formMethods]);

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};
