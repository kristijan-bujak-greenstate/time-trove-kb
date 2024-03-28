import { useLanguageContext } from '../context/LanguageContext';
import { translations } from '../internationalization/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguageContext();

  const languageCode = currentLanguage.value.toLocaleLowerCase();

  const t = (key: string) => translations[languageCode][key] || translations[languageCode]['translationMissing'];

  return { t };
};
