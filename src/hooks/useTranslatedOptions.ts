import { useMemo } from 'react';

import { OptionSelectPriority } from '../components';

import { TranslationKey, useTranslation } from './useTranslation';

export const useTranslatedOptions = (selectOptions: OptionSelectPriority[]) => {
  const { t } = useTranslation();

  const translatedOptions = useMemo(
    () =>
      selectOptions.map((option) => ({
        ...option,
        optionTextValue: t(('priority.' + option.value) as TranslationKey),
      })),
    [t, selectOptions]
  );

  return translatedOptions;
};
