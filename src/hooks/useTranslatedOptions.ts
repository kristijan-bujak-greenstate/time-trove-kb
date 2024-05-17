import { useMemo } from 'react';

import { OptionSelectPriority } from '../components';

import { useTranslation } from './useTranslation';

export const useTranslatedOptions = (selectOptions: OptionSelectPriority[]) => {
  const { t } = useTranslation();

  const translatedOptions = useMemo(
    () =>
      selectOptions.map((option) => ({
        ...option,
        optionTextValue: t(option.value),
      })),
    [t, selectOptions]
  );

  return translatedOptions;
};
