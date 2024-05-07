import { useMemo } from 'react';

import { mockedSelectOptionsItems } from '../shared/data/selectOptionsItems';

import { useTranslation } from './useTranslation';

export const useTranslatedOptions = () => {
  const { t } = useTranslation();

  const translatedOptions = useMemo(
    () =>
      mockedSelectOptionsItems.map((option) => ({
        ...option,
        optionTextValue: t(option.value),
      })),
    [t]
  );

  return translatedOptions;
};
