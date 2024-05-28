import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode, useEffect } from 'react';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { ZodType } from 'zod';

import { useLanguageContext } from '../../context/LanguageContext';
import { TranslationKey, useTranslation } from '../../hooks/useTranslation';

type ControlledFormProps = {
  schema: TranslatedSchema;
  defaultValues?: FieldValues;
  children: ReactNode;
};

type TranslatedSchema = (t: (key: TranslationKey) => string) => ZodType;

export const ControlledForm = ({ schema, defaultValues, children }: ControlledFormProps): JSX.Element => {
  const { t } = useTranslation();

  const formMethods = useForm({
    mode: 'onChange',
    resolver: zodResolver(schema(t)),
    defaultValues,
  });

  const { currentLanguage } = useLanguageContext();

  useEffect(() => {
    formMethods.trigger(Object.keys(formMethods.formState.errors));
  }, [currentLanguage, formMethods]);

  return <FormProvider {...formMethods}>{children}</FormProvider>;
};
