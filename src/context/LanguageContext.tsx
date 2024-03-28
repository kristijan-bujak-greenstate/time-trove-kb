/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode, useContext } from 'react';

import { DropdownOption } from '../components/dropdown/types';
import { languageOptions } from '../shared/data/languageOptions';

type LanguageContextProps = {
  currentLanguage: DropdownOption;
  setCurrentLanguage: (language: DropdownOption) => void;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageContext = createContext({} as LanguageContextProps);

export const useLanguageContext = () => useContext(LanguageContext);

const storedLanguageValue = localStorage.getItem('language');

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState<DropdownOption>(
    languageOptions.find((option) => option.value === storedLanguageValue) || languageOptions[0]
  );

  localStorage.setItem('language', currentLanguage.value);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>{children}</LanguageContext.Provider>
  );
};
