/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { FieldErrors, FieldValues, Path, UseFormTrigger } from 'react-hook-form';

import { useLanguageContext } from '../context/LanguageContext';

type ErrorFieldsType<T> = Path<T> | Path<T>[];

export const useLanguageFormValidation = <T extends FieldValues>(
  errors: FieldErrors<T>,
  trigger: UseFormTrigger<T>
) => {
  const { currentLanguage } = useLanguageContext();

  useEffect(() => {
    trigger(Object.keys(errors) as ErrorFieldsType<T>);
  }, [currentLanguage]);
};
